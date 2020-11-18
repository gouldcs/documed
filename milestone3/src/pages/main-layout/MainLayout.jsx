import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Paper from "@material-ui/core/Paper"

import Header from "../../components/Header"
import MenuPanel from "../../components/MenuPanel"
import UploadPage from "./contact/ContactTemplate"
import { Typography } from "@material-ui/core"

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
    flexDirection: "column",
  },

  pageTitle: {
    display: "flex",
    flex: 1,
  },

  emptyForNow: {
    display: "flex",
    flex: 1,
  },

  title: {
    display: "flex",
    flex: 5,
    padding: 8,
  },

  content: {
    display: "flex",
    flexDirection: "row",
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
    marginRight: 20,
  },
}))

const MainLayout = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.dashboard}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.pageTitle}>
        <div className={classes.emptyForNow} />
        <div className={classes.title}>
          <Typography variant="h5">Page Title</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.menu}>
          <MenuPanel />
        </div>
        <div className={classes.pageContent}>
          <Paper className={classes.paper}>
            <UploadPage />
          </Paper>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
