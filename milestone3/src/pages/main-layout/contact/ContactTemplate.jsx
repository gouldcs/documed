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
    flexDirection: "row",
  },

  toLabel: {
    flex: 1,
  },

  selectElement: {
    display: "flex",
    flex: 14,
  },

  formControl: {
    width: "20%",
  },

  message: {
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
            <Select
              defaultValue=""
              // variant="outlined"
              className={classes.select}
            >
              <MenuItem value={""} disabled>
                Select Doctor
              </MenuItem>
              <MenuItem value={"Dr. Toal"}>Dr. Toal</MenuItem>
              <MenuItem value={"Dr. Forney"}>Dr. Forney</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={classes.message}>
        Text goes here (also add doc attachment feature)
      </div>
      <div className={classes.button}>
        <Button>Send</Button>
      </div>
    </div>
  )
}

export default ContactTemplate
