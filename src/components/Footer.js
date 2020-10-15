import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'calc(100% - 40px)',
        padding: '20px',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7))',
        color: theme.palette.text.primary,
        textAlign: 'center',
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="body1">
                Data sources:
            </Typography>
            <Typography gutterBottom>
                <Link href="https://api.nasa.gov/" target="_blank" className="link">
                APOD and Asteroids NeoWs from NASA APIs
                </Link>
            </Typography>
            <Typography variant="body1">
                Designed by:
            </Typography>
            <Link href="https://zandrexrc.me" target="_blank" className="link">
               Zandrex Camagon
            </Link>
        </div>
    );
}

export { Footer };