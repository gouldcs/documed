import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link";

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
      <Header text="DocuMed" />
      <div className={classes.logoutText}>
        <Typography style={{ fontSize: 36, }}>You have successfully signed out.</Typography>
      </div>
      <div className={classes.signBackIn}>
            <Link href={"/login"}>
                <Button style={{ fontSize: 24, color: '#6681FF', textTransform: 'none', }}>Sign back in</Button>
            </Link>
      </div>
    </div>
  )
}

export default Logout
