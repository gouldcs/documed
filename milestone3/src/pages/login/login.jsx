import React from "react";

import SignIn from "./login-components/SignIn"
import Header from "../../components/Header"


const Login = (props) => {

  return (
    <div>
      <div>
        <Header text="DocuMed" />
      </div>
      <div>
        <SignIn />
      </div>
    </div>
  )
}

export default Login
