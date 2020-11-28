import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
  TextField,
  Link,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  uploadContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
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

  messageContainer: {
    padding: 20,
  },

  button: {
    display: "flex",
    flexDirection: "row-reverse",
  },
}))

const ContactTemplate = (props) => {
  const classes = useStyles(props)

  console.log(props.recipient)

  return (
    <div className={classes.uploadContainer}>
      <div className={classes.select}>
        <div className={classes.toLabel}>
          <Typography>To: </Typography>
        </div>
        <div className={classes.selectElement}>
          <FormControl className={classes.formControl}>
            <Select defaultValue="" className={classes.select}>
              <MenuItem value={""} disabled>
                Select {props.recipient}
              </MenuItem>
              <MenuItem value={"Dr. Toal"}>Dr. Toal</MenuItem>
              <MenuItem value={"Dr. Forney"}>Dr. Forney</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={classes.messageContainer}>
        <TextField
          multiline
          rows={15}
          variant="outlined"
          style={{ width: "100%" }}
        />
      </div>
      <div className={classes.button}>
          <Link href="/home">
            <Button>Send</Button>
          </Link>
      </div>
    </div>
  )
}

export default ContactTemplate
