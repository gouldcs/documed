import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  uploadContainer: {
    display: "flex",
    flexDirection: "column",
  },

  select: {
    display: "flex",
    flex: 1,
  },

  toLabel: {
    flex: 1,
  },

  selectElement: {
    flex: 14,
  },

  formControl: {
    minWidth: 120,
  },

  upload: {
    outline: 2,
  },

  button: {
    display: "flex",
    flexDirection: "row-reverse",
  },
}))

const ContactTemplate = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.uploadContainer}>
      <div className={classes.select}>
        <div className={classes.toLabel}>
          <Typography>To: </Typography>
        </div>
        <div className={classes.selectElement}>
          <FormControl className={classes.formControl}>
            <InputLabel>Select Doctor</InputLabel>
            <Select className={classes.select}>
              <MenuItem value={"Comfortable"}>Dr. Toal</MenuItem>
              <MenuItem value={"Cozy"}>Dr. Forney</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={classes.upload}>Upload goes here</div>
      <div className={classes.button}>
        <Button>Send</Button>
      </div>
    </div>
  )
}

export default ContactTemplate
