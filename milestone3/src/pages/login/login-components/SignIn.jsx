import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles((theme) => ({
  defaultSetup: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
  },

  divContainer: {
    maxWidth: 700,
    minHeight: 400,
    //flex: 4,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    margin: "auto",
    marginBottom: 30,
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    alignSelf: "center",
    alignContent: "center",
  },

  heading: {
    display: "flex",
    margin: "auto",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  buttonDiv: {
    display: "flex",
    marginTop: 20,
    marginBottom: 15,
  },

  inputFields: {
    display: "flex",
    marginLeft: 50,
    marginBottom: 10,
    marginRight: 50,
  },

  callToAction: {
    display: "flex",
    alignContent: "center",
    justifySelf: "center",
  },

  signUp: {
    display: "flex",
    margin: "auto",
    marginBottom: 10,
  },
}))

const SignIn = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.defaultSetup}>
      <div className={classes.divContainer}>
        <div className={classes.contentContainer}>
          <div className={classes.heading}>
            <Typography variant="h4">
              Sign in to your DocuMed account
            </Typography>
          </div>
          <div className={classes.inputFields}>
            <Typography variant="h6">Email</Typography>
          </div>
          <div className={classes.inputFields}>
            <TextField id="email" variant="filled" fullWidth></TextField>
          </div>
          <div className={classes.inputFields}>
            <Typography variant="h6">Password</Typography>
          </div>
          <div className={classes.inputFields}>
            <TextField id="password" variant="filled" fullWidth></TextField>
          </div>
          <div className={classes.inputFields}>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              <Link href="/login/forgotpassword">
                Forgot password? Click here
              </Link>
            </Typography>
          </div>
          <div className={classes.buttonDiv}>
            <Link href={"/home"}>
              <Button
                variant="contained"
                style={{
                  width: 400,
                  margin: "auto",
                  height: 50,
                  backgroundColor: "#6681ff",
                  textTransform: "none",
                  color: "white",
                }}
              >
                <Typography variant="h6">Sign In</Typography>
              </Button>
            </Link>
          </div>
          <div className={classes.callToAction}>
            <Typography variant="h6" style={{ margin: "auto" }}>
              Don't have an account?
            </Typography>
          </div>
          <div className={classes.signUp}>
            <Link href="/">
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                Sign up here!
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
