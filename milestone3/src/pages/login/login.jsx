import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "../../components/SignIn";
import Header from "../../components/Header";


const Login = (props) => {

  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
            <SignIn/>
        </div>
    </div>
  )
}

export default Login
