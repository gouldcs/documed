import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
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

  return (
    <div className={classes.root}>
      <div className={classes.dashboardContent}>
        <div className={classes.leftColumn}>
        <Typography variant="h5">
            Select Class:
          </Typography>
        <MenuList className={classes.navigation}>
            <Router>
              <MenuItem className={classes.navItem}>
                <Link to ="/dashboard" className={classes.classSelectionItem}>CMSI 485</Link>
              </MenuItem>
              <MenuItem className={classes.navItem}>
                <Link to ="/mydocs" className={classes.classSelectionItem}>CMSI 370</Link>
              </MenuItem>
              <MenuItem className={classes.navItem}>
                <Link to ="/upload" className={classes.classSelectionItem}>CMSI 385</Link>
              </MenuItem>
              <MenuItem className={classes.navItem}>
                <Link to ="/contact" className={classes.classSelectionItem}>CMSI 386</Link>
              </MenuItem>
              <MenuItem className={classes.navItem}>
                <Link to ="/contact" className={classes.classSelectionItem}>CMSI 432</Link>
              </MenuItem>
              {/* <Switch>
                  <Route path="/Dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="/MyDocs">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
              </Switch> */}
            </Router>
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
            <FormGroup aria-label="position" column style={{paddingLeft:20,}}>
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
          <div className={classes.optionsContainer}>
            <div className={classes.optionButton}>
              <Button variant="contained"
                style={{
                    width:150,
                    height: 50,
                    backgroundColor:"#FF5E5E",
                    textTransform: "none",
                    color: 'white',
                    borderRadius: 100,
                }}>
                    <Typography variant = 'h6'>
                        Cancel
                    </Typography>
              </Button>
            </div>
            <div className={classes.optionButton}>
              <Button variant="contained"
                style={{
                    width:150,
                    height: 50,
                    backgroundColor:"#6681ff",
                    textTransform: "none",
                    color: 'white',
                    borderRadius: 100,
                }}>
                    <Typography variant = 'h6'>
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