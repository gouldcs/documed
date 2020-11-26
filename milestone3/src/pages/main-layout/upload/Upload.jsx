import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import Divider from "@material-ui/core/Divider"
import { DropzoneArea } from "material-ui-dropzone"
import UploadBox from "../../../components/DragToUpload"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "90%",
    paddingTop: 50,
    paddingBottom: 50,
  },

  topRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  topRowItem: {
    width: "90%",
  },

  bottomRow: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    alignContent: "center",
  },

  classSelectionItem: {
    fontSize: 18,
    paddingBottom: 10,
    fontWeight: "regular",
    color: "#000000",
    textDecoration: "none",
  },

  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 70,
    paddingBottom: 10,
    alignSelf: "center",
    alignContent: "center",
  },

  optionButton: {
    paddingLeft: 15,
    paddingRight: 15,
  },
}))

const Upload = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.dashboardContent}>
        <div className={classes.topRow}>
          <div className={classes.topRowItem}>
            <DropzoneArea
              onChange={(files) => console.log("Files:", files)}
              className={classes.topRowItem}
            />
          </div>
          <div className={classes.topRowItem}>
            <Typography style={{fontSize: 14,alignSelf: "center",color:"#FF5E5E"}}>
              *All uploaded documents can be found in MyDocs*
            </Typography>
          </div>
        </div>

        <div className={classes.bottomRow}>
          <div className={classes.optionsContainer}>
            <div className={classes.optionButton}>
              <Button
                variant="contained"
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: "#FF5E5E",
                  textTransform: "none",
                  color: "white",
                  borderRadius: 100,
                }}
              >
                <Typography variant="h6">Cancel</Typography>
              </Button>
            </div>
            <div className={classes.optionButton}>
              <Button
                variant="contained"
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: "#6681ff",
                  textTransform: "none",
                  color: "white",
                  borderRadius: 100,
                }}
              >
                <Typography variant="h6">Done</Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
