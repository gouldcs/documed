import { React, useState } from "react"
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

const useStyles = makeStyles(
  (theme) => ({
    contactContainer: {
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

    text: {
      display: "flex",
      direction: "column",
    },

    text: {
      display: "flex",
      paddingTop: "20%",
      justifyContent: "center",
      alignContent: "center",
      verticalAlign: "center",
    },

    linkText: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      verticalAlign: "center",
    },
  }),
  { name: "ContactTemplate" }
)

const ContactTemplate = (props) => {
  const classes = useStyles(props)

  const [submitted, setSubmitted] = useState(false)
  let toReturn = ""

  if (submitted === false) {
    toReturn = (
      <div className={classes.contactContainer}>
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
          <Button onClick={() => setSubmitted(true)}>Send</Button>
        </div>
      </div>
    )
  } else {
    toReturn = (
      <div className={classes.textContainer}>
        <div className={classes.text}>
          <Typography style={{ fontSize: 24 }}>
            Your message has been sent!
          </Typography>
        </div>
        <div className={classes.linkText}>
          <Link href={"/home"}>
            <Typography style={{ fontSize: 24 }}>
              Return to dashboard
            </Typography>
          </Link>
        </div>
      </div>
    )
  }

  return toReturn
}

export default ContactTemplate
