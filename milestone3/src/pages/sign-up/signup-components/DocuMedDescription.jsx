import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    (theme) => ({
        default: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: 500,
        }
    })
)

const DocuMedDescription = () => {
    const classes = useStyles();
    return (
        <div className={classes.default}>
            <Typography variant='h3' style={{ fontWeight: 'bold' }}>
                All Your Medical Documents in One Place
                    </Typography>
            <Typography variant='h5'>
                Welcome to DocuMed: a platform designed to make it
                easier for students to request, submit, and access
                documents relating to their mental and physical
                health needs.
            </Typography>
        </div>
    )
}

export default DocuMedDescription;