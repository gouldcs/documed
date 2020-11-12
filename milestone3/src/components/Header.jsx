import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(
  (theme) => ({
    headerContainer: {
      display: "flex",
      backgroundColor: "#6681FF",
      //justifyContent: "center",
    },

    title: {
      display: "flex",
      color: "white",
      float: "right",
    },

    exitButton: {
      display: "flex",
      float: "right",
    },
  }),
  { name: "Header" }
)

const Header = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.headerContainer}>
      <Grid container>
        <Grid item xs={7}>
          <div className={classes.title}>
            <Typography variant="h4">DocuMed</Typography>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className={classes.exitButton}>
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header
