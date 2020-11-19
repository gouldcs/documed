import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
import Paper from "@material-ui/core/Paper"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
            <Router>
              <MenuItem className={classes.navItem}>
                <Link to ="/dashboard" className={classes.navItemFormat}>Dashboard</Link>
              </MenuItem>
              <MenuItem className={classes.navItem}>
                <Link to ="/mydocs" className={classes.navItemFormat}>MyDocs</Link>
              </MenuItem>
              <MenuItem className={classes.navItem}>
                <Link to ="/upload" className={classes.navItemFormat}>Upload Docs</Link>
              </MenuItem>
              <MenuItem className={classes.navItem}>
                <Link to ="/contact" className={classes.navItemFormat}>Contact Doctor</Link>
              </MenuItem>
              <MenuItem className={classes.navItem}>
                <Link to ="/contact" className={classes.navItemFormat}>Contact DSS</Link>
              </MenuItem>
              {/* <Switch>
                  <Route path="/Dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="/MyDocs">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
              </Switch> */}
            </Router>
          </MenuList>
        </Paper>
      </div>
    </div>
  )
}

export default MenuPanel
