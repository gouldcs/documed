import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(
    (theme) => ({
        defaultSetup: {
            paddingTop: 120,
            display: "flex",
            flexDirection: "row",
        },

        paper: {
            maxWidth: 700,
            minHeight: 400,
            flex: 4,
            elevation: 3,
            display: 'flex',
            flexDirection:'column',
            alignContent: 'center',
            margin: 'auto',
            borderRadius: 20,
            backgroundColor: '#F8F8F8',
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
            marginTop: 40,
            marginBottom: 20,
        },

        buttonDiv: {
            display:'flex',
            marginTop: 20,
            marginBottom: 15
        },

        button: {
            variant: 'contained',
            color: 'primary',
            borderRadius: 100,
            border: 40,
            width: 60,
            height: 30,
            padding: '30px 30px',
        },

        inputFields: {
            display: 'flex',
            marginLeft: 50,
            marginBottom: 10,
            marginRight: 50,
        },

        callToAction: {
            display: 'flex',
            alignContent: 'center',
            justifySelf: 'center',
        },

        signUp: {
            display:'flex',
            margin: 'auto',
            marginBottom: 40,
        }


}))



const SignIn = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.defaultSetup}>
            <Paper className={classes.paper}>
                <div className={classes.contentContainer}>
                    <div className={classes.heading}>
                        <Typography variant='h4'>
                            Sign in to your DocuMed account
                        </Typography>
                    </div>
                    <div className={classes.inputFields}>
                        <Typography variant='h6'>
                            Email
                        </Typography>
                    </div>
                    <div className={classes.inputFields}>
                        <TextField id="email" variant="filled" fullWidth>
                        </TextField>
                    </div>
                    <div className={classes.inputFields}>
                        <Typography variant='h6'>
                            Password
                        </Typography>
                    </div>
                    <div className={classes.inputFields}>
                        <TextField id="password" variant="filled" fullWidth>
                        </TextField>
                    </div>
                    <div className={classes.inputFields}>
                        <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>
                            <Link href="#">
                            Forgot password? Click here
                            </Link>
                        </Typography>
                    </div>
                    <div className={classes.buttonDiv}>
                        <Button variant="contained"
                        style={{
                            width:400,
                            margin: 'auto',
                            height: 50,
                            backgroundColor:"#6681ff",
                            textTransform: "none",
                            color: 'white'
                        }}>
                            <Typography variant = 'h6'>
                                Sign In
                            </Typography>
                        </Button>
                    </div>
                    <div className={classes.callToAction}>
                        <Typography variant='h6' style={{margin: 'auto',}}>
                            Don't have an account?
                        </Typography>
                    </div>
                    <div className={classes.signUp}>
                        <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>
                            <Link href='#'>
                                Sign up here!
                            </Link>
                        </Typography>
                    </div>
                </div>
            </Paper>

        </div>

    )
}

export default SignIn;