import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import WarningIcon from '@material-ui/icons/Warning';
import { Avatar, Collapse, Divider, Link, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { getOrbitDiagramUrl, getCloseApproachDate, getEstimatedDiameter, getRelativeVelocity, getMissDistance } from '../utils/asteroidDataUtils';


const useStyles = makeStyles(theme => ({
    root: {
        "& .hazard": {
            display: 'flex',
            alignItems: 'center',
            "& .icon": {
                marginRight: '0.2em',
            },
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
                marginBottom: '0.5em',
            },
            "& .MuiTypography-body2": {
                color: 'rgba(255, 255, 255, 0.7)',
            },
        }
    }
}));


const ContentListItemDetail = props => {
    return (
        <div className="detail">
            <Typography variant="body1">
                {props.label}
            </Typography>
            <Typography variant="body2">
                {props.value}
            </Typography>
        </div>
    );
}


const ContentListItem = props => {
    const { data } = props;
    const classes = useStyles();

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
                        <Typography className="hazard warning" variant="body2">
                            <WarningIcon className="icon" fontSize="small" />
                            Potentially hazardous
                        </Typography> :
                        <Typography className="hazard safe" variant="body2">
                            <CheckCircleIcon className="icon" fontSize="small" />
                            Not potentially hazardous
                        </Typography>
                    }
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div className="details">
                    <ContentListItemDetail
                        label="CLOSE APPROACH DATE"
                        value={ getCloseApproachDate(data) }
                    />
                    <ContentListItemDetail
                        label="ESTIMATED DIAMETER"
                        value={ getEstimatedDiameter(data) }
                    />
                    <ContentListItemDetail
                        label="RELATIVE VELOCITY"
                        value={ getRelativeVelocity(data) }
                    />
                    <ContentListItemDetail
                        label="MISS DISTANCE"
                        value={ getMissDistance(data) }
                    />
                    <div className="link">
                        <Link href={ getOrbitDiagramUrl(data) } target="_blank">
                            View orbit diagram
                        </Link>
                    </div>
                    <div className="link">
                        <Link href={data.nasa_jpl_url} target="_blank">
                            More details in the NASA JPL Database
                        </Link>
                    </div>
                </div>
            </Collapse>
            <Divider />
        </div>
    );
}

// PropTypes
ContentListItemDetail.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

ContentListItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export { ContentListItem };