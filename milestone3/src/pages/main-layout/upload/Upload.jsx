import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import UploadBox from "../../../components/DragToUpload";
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Typography } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '90%',
    paddingTop: 50,
    paddingBottom: 50,
  },

  dashboardContent: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 50,
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 10,
    alignItems: "center",
  },
  
  leftColumnItem: {
    paddingTop: 10,
    paddingBottom: 15,
  },

  centerColumn: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 75,
    paddingRight: 50,
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
  },

  tableContainer: {
    width: '90%',
  },

  classSelectionItem: {
    fontSize: 18,
    paddingTop: 10,
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
  },

  optionButton: {
    paddingLeft: 10,
    paddingRight: 25,
  },

}))

function createData(filesUploaded) {
  return { filesUploaded };
}

const rows = [
  createData('drham_adhd_accom_lateexam.pdf'),
  createData('drham_adhd_accom_recordedlectures.docx'),
  createData('drham_dep_accom_serviceanimal.pdf'),
  createData('drham_anx_accom_relaxeddeadlines.docx'),
  createData('drham_anx_accom_frequentbreaks.pdf'),
];

const Accommodations = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.dashboardContent}>

        <div className={classes.leftColumn}>
          <div className={classes.leftColumnItem}>
            <UploadBox />
          </div>
          <div className={classes.leftColumnItem}>
            <Typography variant="h5">
              or
            </Typography>
          </div>
          <div className={classes.leftColumnItem}>
            <div className={classes.optionButton}>
              <Button variant="contained"
                style={{
                    width:225,
                    height: 50,
                    backgroundColor:"#C4C4C4",
                    textTransform: "none",
                    color: 'white',
                    borderRadius: 100,
                }}>
                  <Typography variant = 'h6'>
                      Select Documents
                  </Typography>
              </Button>
            </div>
          </div>
        </div>

        <div className={classes.centerColumn}>
          <Divider orientation="vertical" flexItem />
        </div>

        <div className={classes.rightColumn}>
          <div className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Files Selected</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.filesUploaded}>
                    <TableCell component="th" scope="row" style={{fontWeight:"light",}}>
                      {row.filesUploaded}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className={classes.optionsContainer}>
            <div className={classes.optionButton}>
              <Button variant="contained"
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: "#FF5E5E",
                  textTransform: "none",
                  color: 'white',
                  borderRadius: 100,
                }}>
                <Typography variant='h6'>
                  Cancel
                    </Typography>
              </Button>
            </div>
            <div className={classes.optionButton}>
              <Button variant="contained"
                style={{
                  width: 150,
                  height: 50,
                  backgroundColor: "#6681ff",
                  textTransform: "none",
                  color: 'white',
                  borderRadius: 100,
                }}>
                <Typography variant='h6'>
                  Done
                </Typography>
              </Button>
            </div>
          </div>
        </div>
    </div>       
  </div> 
  )
}

export default Accommodations