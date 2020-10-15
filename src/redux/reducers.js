import { combineReducers } from 'redux';

const isFetching = (state = false, action) => {
    return action.type === "TOGGLE_IS_FETCHING" ? action.payload : state;
};

const error = (state = null, action) => {
    return action.type === "SET_ERROR" ? action.payload : state;
};

const dataIsLoaded = (state = false, action) => {
    return action.type === "SET_DATA_IS_LOADED" ? action.payload : state;
};

const coverImage = (state = null, action) => {
    return action.type === "GET_COVER_IMAGE" ? action.payload : state;
};

const asteroidsData = (state = null, action) => {
    return action.type === "GET_ASTEROIDS_DATA" ? action.payload : state;
};

const rootReducer = combineReducers({
    isFetching,
    error,
    dataIsLoaded,
    coverImage,
    asteroidsData,
});

export { rootReducer };