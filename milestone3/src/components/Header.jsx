import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core"

import ExitToAppIcon from "@material-ui/icons/ExitToApp"

const useStyles = makeStyles(
  (theme) => ({
    nameHeader: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },

    root: {
      flexGrow: 1,
    },

    centeredTitle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: "center",
    },

    centeredTitleText: {
      fontWeight: "bold",
      textAlign: "center",
    },

    title: {
      display: "flex",
      flex: 1,
      fontWeight: "bold",
      color: "#FFFFFF",
      paddingTop: 10,
      paddingBottom: 10,
    },

    settings: {
      color: "#FFFFFF",
    },

    logout: {
      color: "#FFFFFF",
    },
  }),
  { name: "Header" }
)

const Header = (props) => {
  const classes = useStyles(props)
  let toReturn = ""

  if (props.text === "DocuMed" || props.text === "Welcome to DocuMed") {
    toReturn = (
      <div className={classes.root}>
        <AppBar position="static" style={{ background: "#1F5780" }}>
          <Toolbar>
            <div className={classes.centeredTitle}>
              <Typography variant="h3" className={classes.centeredTitleText}>
                {props.text}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  } else {
    toReturn = (
      <div className={classes.root}>
        <AppBar position="static" style={{ background: "#1F5780" }}>
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              DocuMed
            </Typography>
            <Link href={"/Logout"}>
              <IconButton size="medium" edge="end" className={classes.logout}>
                <ExitToAppIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

  return toReturn
}

export default Header
