import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({}), { name: "Logout" })

const Logout = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.uploadContainer}>
      <Typography>You have successfully signed out.</Typography>
    </div>
  )
}

export default Logout
