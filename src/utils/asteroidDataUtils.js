// Returns the URL of the 3D orbital diagram of the asteroid
export const getOrbitDiagramUrl = data => {
    return 'https://ssd.jpl.nasa.gov/ov/index.html#elem=' +
            `w:${data.orbital_data.perihelion_argument},` + 
            `e:${data.orbital_data.eccentricity},` + 
            `epoch:${data.orbital_data.epoch_osculation},` + 
            `tp:${data.orbital_data.perihelion_time},` + 
            `per:${data.orbital_data.orbital_period},` + 
            `om:${data.orbital_data.ascending_node_longitude},` + 
            `ad:${data.orbital_data.aphelion_distance},` + 
            `q:${data.orbital_data.perihelion_distance},` + 
            `label:${encodeURI(data.name)},` + 
            `i:${data.orbital_data.inclination}`;
};

// Returns the full close approach date (date + time) if it exists,
// otherwise returns just the date
export const getCloseApproachDate = data => {
    return data.close_approach_data[0].close_approach_date_full ? 
           data.close_approach_data[0].close_approach_date_full :
           data.close_approach_data[0].close_approach_date;
};

// Returns the minimum and maximum estimated diameter of the asteroid (in kilometers)
export const getEstimatedDiameter = data => {
    return `${data.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} km - ` + 
           `${data.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km`;
};

// Returns the relative velocity (measured in kilometers per hour)
export const getRelativeVelocity = data => {
    return `${parseFloat(data.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)} km/h`
};

// Returns the miss distance (in km)
export const getMissDistance = data => {
    return `${parseFloat(data.close_approach_data[0].miss_distance.kilometers).toFixed(2)} km`
};