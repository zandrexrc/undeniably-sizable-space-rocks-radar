import fetch from 'cross-fetch';
import moment from 'moment';

const API_KEY = process.env.REACT_APP_NASA_API_KEY || 'DEMO_KEY';
const TODAY = moment().format('YYYY-MM-DD');

export const toggleIsFetching = status => ({
    type: "TOGGLE_IS_FETCHING",
    payload: status
});

export const setError = error => ({
    type: "SET_ERROR",
    payload: error
});

export const setDataIsLoaded = () => ({
    type: "SET_DATA_IS_LOADED",
    payload: true
});

export function getCoverImage() {
    return async (dispatch, getState) => {
        if (!getState().isFetching) {
            dispatch(toggleIsFetching(true));
            try {
                const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
                const payload = await res.json();

                if (payload.error) {
                    throw (payload);
                }

                let imageUrl = "";
                if (payload.media_type === "image") {
                    // Get HD version of APOD if possible
                    imageUrl = payload.hdurl ? payload.hdurl : payload.url;
                } else {
                    // Fallback to an existing image if APOD is not available
                    imageUrl = "https://apod.nasa.gov/apod/image/2010/RhoAntares_Abolfath_3000.jpg";
                }

                dispatch(toggleIsFetching(false));
                dispatch({
                    type: "GET_COVER_IMAGE",
                    payload: imageUrl
                });
            } catch (error) {
                if (error.message) {
                    dispatch(setError("Failed to get cover image: " + error.message));
                } else {
                    dispatch(setError("Failed to get cover image."));
                }
            }
        }
    }
}

export function getAsteroidsData() {
    return async (dispatch, getState) => {
        if (!getState().isFetching) {
            dispatch(toggleIsFetching(true));
            try {
                const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${TODAY}&end_date=${TODAY}&detailed=true&api_key=${API_KEY}`);
                const payload = await res.json();

                if (payload.error || payload.error_message) {
                    throw (payload);
                }

                dispatch(toggleIsFetching(false));
                dispatch({
                    type: "GET_ASTEROIDS_DATA",
                    payload: payload
                });
            } catch (error) {
                if (error.message) {
                    dispatch(setError("Failed to get asteroids data: " + error.message));
                } else if (error.error_message) {
                    dispatch(setError("Failed to get asteroids data: " + error.error_message));
                } else {
                    dispatch(setError("Failed to get asteroids data."));
                }
            }
        }
    }
}

