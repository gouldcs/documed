import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import ExitToApp from "@bit/mui-org.material-ui-icons.exit-to-app";
// import IconButton from "@material-ui/core/IconButton"
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
        {/* <IconButton>
          <ExitToApp />
        </IconButton> */}
      </div>
    </div>
  )
}

export default Header
