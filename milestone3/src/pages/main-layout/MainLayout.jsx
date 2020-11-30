import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import Accommodations from "./mydocs/accommodations/Accommodations"
import Dashboard from "./dashboard/Dashboard"
import DoctorContact from "./contact/DoctorContact"
import DSSContact from "./contact/DSSContact"
import Header from "../../components/Header"
import MenuPanel from "../../components/MenuPanel"
import MyDocs from "./mydocs/MyDocs"
import Upload from "./upload/Upload"

import { Switch, Route, useLocation } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: "flex",
    flexDirection: "column",
  },

  heading: {
    display: "flex",
    flexDirection: "row",
  },

  mainLayout: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifySelf: "center",
    width: "80%",
  },

  pageTitle: {
    display: "flex",
    flex: 1,
  },

  empty: {
    width: 225,
  },

  title: {
    display: "flex",
    alignSelf: "left",
    flex: 5,
    padding: 12,
    paddingTop: 20,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  menu: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },

  pageContent: {
    display: "flex",
    flexDirection: "column",
    flex: 5,
  },

  paper: {
    background: "#F8F8F8",
    borderRadius: 20,
    minHeight: 475,
  },
}))

const MainLayout = (props) => {
  const classes = useStyles(props)
  let location = useLocation()

  const setTitle = (loc) => {
    if (loc.pathname === "/home") {
      return "Dashboard"
    } else if (loc.pathname === "/home/mydocs") {
      return "MyDocs"
    } else if (loc.pathname === "/home/upload") {
      return "Upload Documents"
    } else if (loc.pathname === "/home/contactDoc") {
      return "Contact Doctor"
    } else if (loc.pathname === "/home/contactDSS") {
      return "Contact DSS"
    }
    return loc.pathname
  }

  return (
    <div className={classes.dashboard}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.content}>
        <div className={classes.mainLayout}>
          <div className={classes.empty}></div>
          <div className={classes.pageTitle}>
            <div className={classes.title}>
              <Typography variant="h4">{setTitle(location)}</Typography>
            </div>
          </div>
        </div>
        <div className={classes.mainLayout}>
          <div className={classes.menu}>
            <MenuPanel />
          </div>
          <div className={classes.pageContent}>
            <Paper className={classes.paper}>
              <Switch>
                <Route exact path="/home">
                  <Dashboard />
                </Route>
                <Route exact path="/home/mydocs">
                  <MyDocs />
                </Route>
                <Route exact path="/home/mydocs/accommodations">
                  <Accommodations />
                </Route>
                <Route path="/home/upload">
                  <Upload />
                </Route>
                <Route path="/home/contactDoc">
                  <DoctorContact />
                </Route>
                <Route path="/home/contactDSS">
                  <DSSContact />
                </Route>
              </Switch>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
