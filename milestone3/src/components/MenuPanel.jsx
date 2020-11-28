import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
import Paper from "@material-ui/core/Paper"
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  defaultSetup: {
    //minHeight: 720,
    //minWidth: 240,
    //maxHeight: 720,
    //maxWidth: 240,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
  },

  paper: {
    //flex: 1,
    borderRadius: 20,
    display: "flex",
    padding: "12px 30px 12px",
    background: "#F8F8F8",
  },

  menuPanel: {
    //paddingRight: 24,
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

            <Link href="/home" className={classes.navItemFormat}>
              <MenuItem className={classes.navItem}>
                Dashboard
              </MenuItem>
            </Link>

            <Link href="/home/mydocs" className={classes.navItemFormat}>
              <MenuItem className={classes.navItem}>
                MyDocs
              </MenuItem>
            </Link>

            <Link href="/home/upload" className={classes.navItemFormat}>
              <MenuItem className={classes.navItem}>
                Upload Docs
              </MenuItem>
            </Link>

            <Link href="/home/contactDoc" className={classes.navItemFormat}>
              <MenuItem className={classes.navItem}>
                Contact Doctor
              </MenuItem>
            </Link>

            <Link href="/home/contactDSS" className={classes.navItemFormat}>
              <MenuItem className={classes.navItem}>
                Contact DSS
              </MenuItem>
            </Link>

          </MenuList>
        </Paper>
      </div>
    </div>
  )
}

export default MenuPanel
