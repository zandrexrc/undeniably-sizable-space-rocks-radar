import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Link, ListItem, ListItemAvatar, ListItemText, Collapse, Divider, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        "& .hazardStatus": {
            display: 'inline-flex',
            alignItems: 'center',
        },
        "& .safe": {
            color: theme.palette.success.main,
        },
        "& .warning": {
            color: theme.palette.error.main,
        },
        "& .MuiCollapse-container": {
            "& .details": {
                width: 'calc(100% - 95px)',
                padding: '10px 20px 10px 75px',
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'space-between',
            },
            "& .detail": {
                marginBottom: '1.5em',
                minWidth: 'calc(16em - 95px)',
                width: '45%',
            },
            "& .link": {
                width: '100%',
            },
            "& .MuiTypography-body2": {
                color: 'rgba(255, 255, 255, 0.7)',
            },
        }
    }
}));

const ContentListItem = props => {
    const classes = useStyles();
    const { data } = props;

    const [open, setOpen] = React.useState(false);

    const expandListItem = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <ListItem button onClick={expandListItem}>
                <ListItemAvatar>
                    <Avatar alt="asteroid" src="asteroid.png" />
                </ListItemAvatar>
                <ListItemText 
                    primary={data.name}
                    secondary={
                        data.is_potentially_hazardous_asteroid ? 
                        <Typography className="hazardStatus warning" variant="body2">
                            <WarningIcon fontSize="small" />
                            &nbsp;Potentially hazardous
                        </Typography> :
                        <Typography className="hazardStatus safe" variant="body2">
                            <CheckCircleIcon fontSize="small" />
                            &nbsp;Not potentially hazardous
                        </Typography>
                    }
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div className="details">
                    <div className="detail">
                        <Typography variant="body1">
                            ESTIMATED DIAMETER
                        </Typography>
                        <Typography variant="body2">
                            {data.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} km -&nbsp;
                            {data.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km
                        </Typography>
                    </div>
                    <div className="detail">
                        <Typography variant="body1">
                            CLOSE APPROACH DATE
                        </Typography>
                        <Typography variant="body2">
                            {
                                data.close_approach_data[0].close_approach_date_full ? 
                                data.close_approach_data[0].close_approach_date_full :
                                data.close_approach_data[0].close_approach_date
                            }
                        </Typography>
                    </div>
                    <div className="detail">
                        <Typography variant="body1">
                            RELATIVE VELOCITY
                        </Typography>
                        <Typography variant="body2">
                            {parseFloat(data.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)} km/h
                        </Typography>
                    </div>
                    <div className="detail">
                        <Typography variant="body1">
                            MISS DISTANCE
                        </Typography>
                        <Typography variant="body2">
                            {parseFloat(data.close_approach_data[0].miss_distance.kilometers).toFixed(2)} km
                        </Typography>
                    </div>
                    <div className="link">
                        <Link href={data.nasa_jpl_url} target="_blank">
                            More details
                        </Link>
                    </div>
                </div>
            </Collapse>
            <Divider />
        </div>
    );
}

// PropTypes
ContentListItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export { ContentListItem };