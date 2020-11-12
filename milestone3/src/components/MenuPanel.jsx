import React from "react"
import Header from "./Header"
import { makeStyles } from "@material-ui/core/styles"
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  defaultSetup: {
    minHeight: 720,
    minWidth: 280,
    maxHeight: 720,
    maxWidth: 280,
    paddingTop: 20,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
  },

  paper: {
    flex: 1,
    display: "flex",
    padding: "12px 40px 12px",
  },

  menuPanel: {
    paddingRight: 24,
  },

  navItem: {
    fontSize: 24,
    fontWeight: "regular",
    paddingTop: 24,
    paddingBottom: 24,
  },
}))

const MenuPanel = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.defaultSetup}>
      <div className={classes.menuPanel}>
        <Paper className={classes.paper}>
          <MenuList className={classes.navigation}>
            <MenuItem className={classes.navItem}>Dashboard</MenuItem>
            <MenuItem className={classes.navItem}>MyDocs</MenuItem>
            <MenuItem className={classes.navItem}>Upload Docs</MenuItem>
            <MenuItem className={classes.navItem}>Contact Doctor</MenuItem>
            <MenuItem className={classes.navItem}>Contact DSS</MenuItem>
          </MenuList>
        </Paper>
      </div>
    </div>
  )
}

export default MenuPanel
