import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
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
            minWidth: 600,
            minHeight: 400,
            flex: 4,
            elevation: 3,
            display: 'flex',
            flexDirection:'column',
            margin: 'auto',
            borderRadius: 12,
            backgroundColor: '#F8F8F8',
            marginBottom: 30
        },

        heading: {
            margin: 'auto',
            display: 'flex',
            marginTop: 40,
            marginBottom: 20,
        },

        buttonDiv: {
            margin: 'auto',
            display:'flex',
            marginTop: 20,
            marginBottom: 15
        },

        button: {
            variant: 'contained',
            color: 'primary',
            borderRadius: 3,
            border: 40,
            width: 60,
            height: 30,
            padding: '30px 30px',
        },

        inputFields: {
            display: 'flex',
            marginLeft: 40,
            marginBottom: 10,
            marginRight: 40,
        },

        centered: {
            display: 'flex',
            margin: 'auto',
            marginBottom: 15,
        }


}))



const SignIn = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.defaultSetup}>
            <Paper className={classes.paper}>
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
                    <TextField id="email" label="email" variant="filled" fullWidth>
                    </TextField>
                </div>
                <div className={classes.inputFields}>
                    <Typography variant='h6'>
                        Password
                    </Typography>
                </div>
                <div className={classes.inputFields}>
                    <TextField id="password" label="password" variant="filled" fullWidth>
                    </TextField>
                </div>
                <div className={classes.inputFields}>
                    <Typography variant='subtitle2'>
                        <Link href="#">
                        Forgot password? Click here
                        </Link>
                    </Typography>
                </div>
                <div className={classes.buttonDiv}>
                    <Button variant="contained"
                    style={{
                        width:400,
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
                <div className={classes.centered}>
                    <Typography variant='h6'>
                        Don't have an account?
                    </Typography>
                </div>
                <div className={classes.centered}>
                    <Typography variant='subtitle1'>
                        <Link href='#'>
                            Sign up here!
                        </Link>
                    </Typography>
                </div>
            </Paper>

        </div>

    )
}

export default SignIn;