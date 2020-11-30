import React from "react";

import SignIn from "./login-components/SignIn";
import ForgotPassword from "./forgot-password/ForgotPassword";
import Header from "../../components/Header";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";

const useStyles = makeStyles(
    (theme) => ({
        defaultSetup: {
            paddingTop: 50,
            display: "flex",
            flexDirection: "row",
            alignSelf: 'center',
            alignContent: 'center',
        },

        paper: {
            maxWidth: 700,
            minHeight: 400,
            //flex: 4,
            elevation: 3,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            margin: 'auto',
            borderRadius: 20,
            backgroundColor: '#F8F8F8',
            marginBottom: 30
        },
    })
)


const Login = (props) => {
    const classes = useStyles(props);

  return (
    <div>
      <div>
        <Header text="Welcome to DocuMed" />
      </div>
      <div className={classes.defaultSetup}>
        <Paper className={classes.paper}>
          <Switch>
              <Route exact path = "/login">
                    <SignIn />
              </Route>
              <Route path = "/login/forgotpassword">
                  <ForgotPassword />
              </Route>
          </Switch>
        </Paper>
      </div>
    </div>
  )
}

export default Login
