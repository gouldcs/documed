import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(
  (theme) => ({
    headerContainer: {
      display: "flex",
      backgroundColor: "#6681FF",
    },

    title: {
      color: "white",
      justifyContent: "center",
    },

    exitButton: {
      float: "right",
    },
  }),
  { name: "Header" }
)

const Header = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.headerContainer}>
      <div className={classes.title}>
        <Typography>DocuMed</Typography>
      </div>
      <div className={classes.exitButton}>
        <IconButton>
          <ExitToAppIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header
