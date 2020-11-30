import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    (theme) => ({
        paper: {
            maxWidth: 700,
            minWidth: 500,
            minHeight: 400,
            flex: 4,
            elevation: 3,
            display: 'flex',
            flexDirection:'column',
            borderRadius: 12,
            backgroundColor: '#F8F8F8',
            marginBottom: 30,
            padding: 40
        },

        input: {
            display: 'flex',
            flexDirection: 'row',
        },

        inputColumnLeft: {
            display: 'flex',
            margin: 'auto',
            flexDirection: 'column',
            marginRight: 20,
        },

        inputColumnRight: {
            margin: 'auto',
            display: 'flex',
            flexDirection:'column',
        },

        inputTitle: {
            display: 'flex',
            marginBottom: 10,
        },

        inputField: {
            display: 'flex',
            marginBottom: 25,
            width: 250,
        },

        buttonDiv: {
            justifyContent: 'center',
            display:'flex',
            marginTop: 20,
            marginBottom: 15
        },

        signInLink: {
            justifyContent: 'center',
            display: 'flex',
        }

    })
)

const SignUpComponent = () => {
    const classes = useStyles();
    return(
        <div>
            <Paper className={classes.paper}>

                <div className={classes.input}>

                    <div className={classes.inputColumnLeft}>

                        <div className={classes.inputTitle}>
                            <Typography variant="h6">
                                First Name:
                            </Typography>
                        </div>
                        <div className={classes.inputField}>
                            <TextField variant="filled" fullWidth>
                            </TextField>
                        </div>

                        <div className={classes.inputTitle}>
                            <Typography variant="h6">
                                School or University:
                            </Typography>
                        </div>
                        <div className={classes.inputField}>
                            <TextField variant="filled"  fullWidth>
                            </TextField>
                        </div>

                        <div className={classes.inputTitle}>
                            <Typography variant="h6">
                                Password:
                            </Typography>
                        </div>
                        <div className={classes.inputField}>
                            <TextField variant="filled" fullWidth>
                            </TextField>
                        </div>
                    </div>

                    <div className={classes.inputColumnRight}>
                        <div className={classes.inputTitle}>
                            <Typography variant="h6">
                                Last Name:
                            </Typography>
                        </div>
                        <div className={classes.inputField}>
                            <TextField variant="filled" fullWidth>
                            </TextField>
                        </div>

                        <div className={classes.inputTitle}>
                            <Typography variant="h6">
                                Email:
                            </Typography>
                        </div>
                        <div className={classes.inputField}>
                            <TextField variant="filled" fullWidth>
                            </TextField>
                        </div>

                        <div className={classes.inputTitle}>
                            <Typography variant="h6">
                                Re-Type Password:
                            </Typography>
                        </div>
                        <div className={classes.inputField}>
                            <TextField variant="filled" fullWidth>
                            </TextField>
                        </div>
                    </div>
                </div>
                <div className={classes.buttonDiv}>
                    <Link href="/home">
                        <Button variant="contained"
                        style={{
                            width:400,
                            height: 50,
                            backgroundColor:"#6681ff",
                            textTransform: "none",
                            color: 'white'
                        }}>
                            <Typography variant = 'h6'>
                                Sign Up
                            </Typography>
                        </Button>
                    </Link>
                </div>
                <div className={classes.signInLink}>
                    <Link href="/login">
                        <Typography variant="subtitle1" style={{color:'#6681ff', fontWeight:"bold"}}>
                            or Sign In
                        </Typography>
                    </Link>
                </div>
            </Paper>
        </div>
    )
}

export default SignUpComponent;