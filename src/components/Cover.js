import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'calc(100% - 40px)',
        height: 'calc(100vh - 40px)',
        padding: '20px',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0))',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        color: theme.palette.text.primary,
        "& .description": {
            marginTop: '40px',
        },
        "& .apodLink": {
            width: 'auto',
            display: 'inline-flex',
            marginTop: '40px',
        }
    }
}));

const Cover = props => {
    const classes = useStyles();
    const today = moment();

    return (
        <div className={classes.root}>
            <Typography variant="h4">
                {today.format('dddd')}
            </Typography>
            <Typography variant="h2">
                {today.format('LL')}
            </Typography>
            <Typography variant="body1" className="description">
                There are {props.numAsteroids} asteroids closely 
                approaching Earth today.
            </Typography>
            <Link 
                href={
                    props.coverImage === 'https://apod.nasa.gov/apod/image/2010/RhoAntares_Abolfath_3000.jpg' ? 
                    'https://apod.nasa.gov/apod/ap201014.html' : 
                    'https://apod.nasa.gov/apod/astropix.html'
                }
                target="_blank"
                className="apodLink"
            >
                <InfoIcon /> &nbsp;Astronomy Picture of the Day
            </Link>
        </div>
    );
}

// PropTypes
Cover.propTypes = {
    coverImage: PropTypes.string.isRequired,
    numAsteroids: PropTypes.number.isRequired,
};

export { Cover };