import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import IconButton from "@material-ui/core/IconButton"
import SettingsIcon from "@material-ui/icons/Settings"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexGrow: 1,
    },

    title: {
      display: "flex",
      flex: 1,
      //flexGrow: 1,
      fontWeight: "bold",
      //alignSelf: "center",
      color: "#FFFFFF",
      paddingTop: 10,
      paddingBottom: 10,
    },

    settings: {
      color: "#FFFFFF",
    },

    logout: {
      color: "#FFFFFF",
      //display: "flex",
      //flex: 5,
    },
  }),
  { name: "Header" }
)

const Header = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#1F5780" }}>
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            DocuMed
          </Typography>
          <IconButton size="medium" className={classes.settings}>
            <SettingsIcon />
          </IconButton>
          <IconButton size="medium" edge="end" className={classes.logout}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
