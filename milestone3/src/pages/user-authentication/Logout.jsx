import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Typography from "@material-ui/core/Typography"

import Header from "../../components/Header"

const useStyles = makeStyles(
  (theme) => ({
    logout: {
      height: "100%",
      margin: 0,
    },

    logoutText: {
      display: "flex",
      paddingTop: '20%',
      justifyContent: "center",
      alignContent: 'center',
      verticalAlign: "center",
    },

    signBackIn: {
      display: "flex",
      justifyContent: "center",
      alignContent: 'center',
      verticalAlign: "center",
    },
  }),
  { name: "Logout" }
)

const Logout = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.logout}>
      <Header />
      <div className={classes.logoutText}>
        <Typography style={{fontSize: 36,}}>You have successfully signed out.</Typography>
      </div>
      <div className={classes.signBackIn}>
        <Button style={{fontSize: 24, color: '#6681FF', textTransform: 'none',}}>Log back in</Button>
      </div>
    </div>
  )
}

export default Logout