import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List, Typography } from '@material-ui/core';
import { ContentListItem } from './ContentListItem';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'calc(100% - 40px)',
        minHeight: 'calc(100vh - 100px)',
        padding: '40px 20px',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.7)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: theme.palette.text.primary,
        "& .MuiList-root": {
            minWidth: '16em',
            width: '50%',
        },
    }
}));

const Content = props => {
    const classes = useStyles();
    const today = moment().format('YYYY-MM-DD');

    return (
        <div className={classes.root}>
            <Typography variant="h4">
                Nearby asteroids
            </Typography>
            <List>
                {
                    props.asteroidsData.near_earth_objects[today].map((asteroidData, index) => (
                        <ContentListItem key={index} data={asteroidData} />
                    ))
                }
            </List>
        </div>
    );
}

// PropTypes
Content.propTypes = {
    asteroidsData: PropTypes.object.isRequired,
};

export { Content };