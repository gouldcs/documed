import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "../../components/SignIn";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",

    backgroundColor: "lightblue",
    padding: theme.spacing(5),
    justifyContent: "center",
    alignItems: "center",
  },
}))

const Login = (props) => {
  const classes = useStyles(props)

  return (
    <SignIn/>
  )
}

export default Login
