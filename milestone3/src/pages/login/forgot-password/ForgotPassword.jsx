import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    (theme) => ({
        defaultSetup: {
            paddingTop: 50,
            display: "flex",
            flexDirection: "row",
        },

        divContainer: {
            maxWidth: 700,
            minHeight: 400,
            //flex: 4,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            margin: 'auto',
            marginBottom: 30
        },

        contentContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            alignSelf: 'center',
            alignContent: 'center',
        },

        heading: {
            display: 'flex',
            margin: 'auto',
            textAlign: 'center',
            marginBottom: 20,
        },

        buttonDiv: {
            display: 'flex',
            margin: 'auto',
            marginTop: 20,
            marginBottom: 15
        },

        inputFields: {
            display: 'flex',
            marginLeft: 30,
            marginBottom: 10,
            marginRight: 30,
        },

        callToAction: {
            display: 'flex',
            alignContent: 'center',
            justifySelf: 'center',
        },

        signUp: {
            display: 'flex',
            margin: 'auto',
            marginBottom: 40,
        }


    }))



const ForgotPassword = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.defaultSetup}>
            <div className={classes.divContainer}>
                <div className={classes.contentContainer}>
                    <div className={classes.heading}>
                        <Typography variant='h4'>
                            Resetting Your Password
                        </Typography>
                    </div>
                    <div className={classes.inputFields}>
                        <Typography variant='h6'>
                            New Password
                        </Typography>
                    </div>
                    <div className={classes.inputFields}>
                        <TextField id="email" variant="filled" fullWidth>
                        </TextField>
                    </div>
                    <div className={classes.inputFields}>
                        <Typography variant='h6'>
                            Reenter new Password
                        </Typography>
                    </div>
                    <div className={classes.inputFields}>
                        <TextField id="password" variant="filled" fullWidth>
                        </TextField>
                    </div>
                    <div className={classes.buttonDiv}>
                        <Link href={"/login"}>
                            <Button variant="contained"
                                style={{
                                    width: 200,
                                    margin: 'auto',
                                    height: 50,
                                    backgroundColor: "#FF6161",
                                    textTransform: "none",
                                    color: 'white',
                                }}>
                                <Typography variant='h6'>
                                    Reset Password
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ForgotPassword;