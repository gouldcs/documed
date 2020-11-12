import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",

    backgroundColor: "lightblue",
    padding: theme.spacing(5),
    justifyContent: "center",
    alignItems: "center",
  },
}))

const Dashboard = (props) => {
  const classes = useStyles(props)

  return (
    <>
      <div className={classes.paperContainer}>
        <Paper className={classes.paper} variant="outlined">
          hi
        </Paper>
      </div>
    </>
  )
}

export default Dashboard
