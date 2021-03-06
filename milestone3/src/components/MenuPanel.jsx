import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import Link from "@material-ui/core/Link"
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
  defaultSetup: {
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
  },

  paper: {
    borderRadius: 20,
    display: "flex",
    padding: "12px 30px 12px",
    background: "#F8F8F8",
  },

  navItem: {
    fontSize: 18,
    fontWeight: "regular",
    color: "#000000",
    paddingTop: 30,
    paddingBottom: 30,
  },

  navItemFormat: {
    fontSize: 18,
    fontWeight: "regular",
    color: "#000000",
    textDecoration: "none",
  },
}))

const MenuPanel = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.defaultSetup}>
      <div className={classes.menuPanel}>
        <Paper className={classes.paper} elevation={3}>
          <MenuList className={classes.navigation}>
            <Link
              href="/home"
              underline="none"
              className={classes.navItemFormat}
            >
              <MenuItem className={classes.navItem}>Dashboard</MenuItem>
            </Link>

            <Link
              href="/home/mydocs"
              underline="none"
              className={classes.navItemFormat}
            >
              <MenuItem className={classes.navItem}>MyDocs</MenuItem>
            </Link>

            <Link
              href="/home/upload"
              underline="none"
              className={classes.navItemFormat}
            >
              <MenuItem className={classes.navItem}>Upload Docs</MenuItem>
            </Link>

            <Link
              href="/home/contactDoc"
              underline="none"
              className={classes.navItemFormat}
            >
              <MenuItem className={classes.navItem}>Contact Doctor</MenuItem>
            </Link>

            <Link
              href="/home/contactDSS"
              underline="none"
              className={classes.navItemFormat}
            >
              <MenuItem className={classes.navItem}>Contact DSS</MenuItem>
            </Link>
          </MenuList>
        </Paper>
      </div>
    </div>
  )
}

export default MenuPanel
