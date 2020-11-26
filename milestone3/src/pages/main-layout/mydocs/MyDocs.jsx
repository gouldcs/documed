import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    /// Main page container
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

    },
    //Button size
    navItem: {
      padding: 20
    },
  
    centerColumn: {
      display: "flex",
      flexDirection: "column",
      paddingRight: 50,
      paddingLeft: 50,
    },

    rightColumn: {
      display: "flex",
      flexDirection: "column",
      //backgroundColor: "lightblue",
    },

    docSelectionItem: {
      fontSize: 18,
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: "regular",
      color: "#000000",
      textDecoration: "none",
    },

    /// Cancel/Done buttons
    optionsContainer: {
      display: "flex",
      flexDirection: "row",
      paddingTop: 115,
      paddingBottom: 10,
      paddingLeft: 100,
    },
  
    optionButton: {
      paddingTop: 100,
      paddingLeft: 150,
      paddingRight: 150,
    },

    dividerStyle: {
      paddingLeft: 20,
    }
  
  }))
  
  const MyDocs = (props) => {
    const classes = useStyles(props)
  
    const [document, selectDocument] = useState('document1')
  
    const handleDocumentSelection = (event, c) => {
      selectDocument(c)
      console.log(document === 'document1')
    }
  

  
    return (
      <div className={classes.root}>
        <div className={classes.dashboardContent}>
          <div className={classes.leftColumn}>
            <Typography variant="h5">
              Select Document:                            
              <hr></hr>
            </Typography>
            <MenuList className={classes.navigation}>
              <MenuItem onClick={e => handleDocumentSelection(e, 'document1')} selected={document === 'document1'} className={classes.navItem}>
                <Typography>ADHD: Late Tests</Typography>
              </MenuItem>
              <hr></hr>
              <MenuItem onClick={e => handleDocumentSelection(e, 'document2')} selected={document === 'document2'} className={classes.navItem}>
                <Typography>ADHD: Recorded Lectures</Typography>
              </MenuItem>
              <hr></hr>
              <MenuItem onClick={e => handleDocumentSelection(e, 'document3')} selected={document === 'document3'} className={classes.navItem}>
                <Typography>Depression: ES Animal</Typography>
              </MenuItem>
              <hr></hr>
            </MenuList>
            <div className={classes.optionContainer}>
              <div className={classes.optionButton}>
                <Button variant="contained"
                  style={{
                    width: 400,
                    height: 50,
                    backgroundColor: "#6681ff",
                    textTransform: "none",
                    color: 'white',
                    borderRadius: 100,
                  }}>
                  <Typography variant='h6'>
                    Apply Accommodations
                  </Typography>
                </Button>
              </div>
            </div>
          </div>

          <div className={classes.centerColumn}>
            <Divider orientation="vertical" />
          </div>

          <div className={classes.rightColumn}>
            <Typography variant="h5">
              Exemption Request
            </Typography>
            <p>
            Dr. Ham, 
            <br></br>
            1234 John Wy. 
            <br></br>
            Los Angeles, CA 90045 
            <br></br>
            <br></br>
            To the DSS at Loyola Marymount University,
            <br></br>
            <br></br>
            Raytheon Tole has been diagnosed with ADHD. I have discussed 
            <br></br>
            the implications of this learning disability with him and have
            <br></br>
            determined that it is best for him to have the option to take
            <br></br>
            exams up to 48 hours later than the posted date.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            - Dr. Hams
            </p>
          </div>
        </div>
      </div>
    )
  }

export default MyDocs
