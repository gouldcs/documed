import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Checkbox from "@material-ui/core/Checkbox"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "90%",
  },

}))

const AccommodationsCheckboxes = (props) => {
  const classes = useStyles(props)


  return (
    <div className={classes.root}>
      <Typography variant="h5">Select Accommodations:</Typography>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" column style={{ paddingLeft: 20 }}>
            <FormControlLabel
              value="top"
              control={<Checkbox color="primary" />}
              label="1.5x Time on Exams"
              labelPlacement="end"
            />
            <FormControlLabel
              value="top"
              control={<Checkbox color="primary" />}
              label="Frequent Breaks"
              labelPlacement="end"
            />
            <FormControlLabel
              value="top"
              control={<Checkbox color="primary" />}
              label="Recorded Lectures"
              labelPlacement="end"
            />
            <FormControlLabel
              value="top"
              control={<Checkbox color="primary" />}
              label="Emotional Support Animal"
              labelPlacement="end"
            />
          </FormGroup>
      </FormControl>
    </div>
  )
}

export default AccommodationsCheckboxes
