import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
  },

  navItem: {
    padding: 20,
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
    paddingTop: 115,
    paddingBottom: 10,
  },

  optionButton: {
    paddingLeft: 10,
    paddingRight: 25,
  },

}))

const Accommodations = (props) => {
  const classes = useStyles(props)

  const [course, selectCourse] = useState('course1')

  const handleCourseSelection = (event, c) => {
    selectCourse(c)
    console.log(course === 'course1')
  }

  // let accommodationsApplied = { 'accommodation1': true, 'accommodation2': true, 'accommodation3': true, 'accommodation4': false, 'accommodation5': false }

  return (
    <div className={classes.root}>
      <div className={classes.dashboardContent}>
        <div className={classes.leftColumn}>
          <Typography variant="h5">
            Select Class:
          </Typography>
          <MenuList className={classes.navigation}>
            <MenuItem onClick={e => handleCourseSelection(e, 'course1')} selected={course === 'course1'} className={classes.navItem}>
              <Typography>CMSI 485</Typography>
            </MenuItem>
            <MenuItem onClick={e => handleCourseSelection(e, 'course2')} selected={course === 'course2'} className={classes.navItem}>
              <Typography>CMSI 370</Typography>
            </MenuItem>
            <MenuItem onClick={e => handleCourseSelection(e, 'course3')} selected={course === 'course3'} className={classes.navItem}>
              <Typography>CMSI 385</Typography>
            </MenuItem>
            <MenuItem onClick={e => handleCourseSelection(e, 'course4')} selected={course === 'course4'} className={classes.navItem}>
              <Typography>CMSI 386</Typography>
            </MenuItem>
            <MenuItem onClick={e => handleCourseSelection(e, 'course5')} selected={course === 'course5'} className={classes.navItem}>
              <Typography>CMSI 482</Typography>
            </MenuItem>
          </MenuList>
        </div>
        <div className={classes.centerColumn}>
          <Divider orientation="vertical" flexItem />
        </div>
        <div className={classes.rightColumn}>
          <Typography variant="h5">
            Select Accommodations:
          </Typography>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" column style={{ paddingLeft: 20, }}>
              <FormControlLabel
                // checked={accommodationsApplied['accommodation1']}
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
          <div className={classes.optionsContainer}>
            <div className={classes.optionButton}>
                <Link href="/home/mydocs">
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
                </Link>
            </div>
            <div className={classes.optionButton}>
                <Link href="/home/mydocs">
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
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accommodations