import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(({
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'fixed',
        zIndex: 1,
        "& .img": {
            width: '100%'
        },
        "& .loading": {
            position: 'absolute',
            margin: '0 auto',
        }
    }
}));

const Image = props => {
    const classes = useStyles();

    const [imageIsLoaded, setImageIsLoaded] = useState(false);

    return (
        <div className={classes.root}>
            {
                !imageIsLoaded &&
                <CircularProgress className="loading" />
            }
            <img 
                className="img" 
                src={props.coverImage}
                alt="AstronomyPicture of the Day"
                onLoad={() => setImageIsLoaded(true)}
            />
        </div>
    );
}

// PropTypes
Image.propTypes = {
    coverImage: PropTypes.string.isRequired,
};

export { Image };