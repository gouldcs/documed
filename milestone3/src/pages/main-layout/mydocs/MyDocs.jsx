import React, { useState , Fragment} from "react"
import { makeStyles } from "@material-ui/core/styles"

import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Link from "@material-ui/core/Link"
import MenuList from "@material-ui/core/MenuList"
import MenuItem from "@material-ui/core/MenuItem"
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
    },

    leftHeader: {
      display:"flex",
      flexDirection:"row",
      justifyContent: "space-between",
    },

    navItem: {
      padding: 20,
      justifyContent: "space-between",
    },
  
    centerColumn: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 25,
      paddingRight: 25,
    },

    rightColumn: {
      display: "flex",
      flexDirection: "column",
    },

    docScroller: {
      fontSize: 23,
      height: 300,
      overflow: "auto",
    },

    textScroller: {
      fontSize: 23,
      paddingLeft: 35,
      paddingRight: 25,
      paddingTop: 25,
      paddingBottom: 25,
      fontWeight: "regular",
      color: "#000000",
      backgroundColor: "#efefef",
      textDecoration: "none",
      height: 265,
      overflow: "auto"
    },

    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      paddingTop: 50,
      paddingBottom: 10,
      paddingLeft: 50,
      paddingRight: 50,
    },
  
    accommodationsButton: {
      display: "flex",
      flexDirection: "row",
      paddingLeft: 50,
      paddingRight: 50,
    },
  
  }))
  
  const MyDocs = (props) => {
    const classes = useStyles(props)

    const documents = [
      (
        <Fragment>
          <div>
            John Doe has been diagnosed with ADHD. I have discussed 
            the implications of this learning disability with him and have
            determined that it is best for him to have the option to take
            exams up to 48 hours later than the posted date.
          </div>
        </Fragment>
      ), (
        <Fragment>
          <div>
            John Doe has been diagnosed with ADHD. I have discussed 
            the implications of this learning disability with him and have 
            determined that it is best for him to have access to recorded 
            lectures before, during, and after the date the lecture will 
            be given for him to review the content.
          </div>
        </Fragment>
      ), (
        <Fragment>
          <div>
            John Doe has been diagnosed with ADHD. I have discussed the 
            implications of this learning disability with him and have 
            determined that it is best for him to continuously use his laptop 
            for educational purposes during class. 
          </div>
        </Fragment>
      ), (
        <Fragment>
          <div>
            John Doe has been diagnosed with Depression. I have discussed the 
            implications of this learning disability with him and have 
            determined the presence of his emotional support animal is 
            mandatory and give him clearance to bring his animal to class.
          </div>
        </Fragment>
      ),
      (
        <Fragment>
          <div>
            John Doe has been diagnosed with Depression. I have discussed the 
            implications of this learning disability with him and have determined 
            that it would be best if he were allowed to have a reserved seat close 
            to the door and preferably in the back of the classroom. It is imperative
            that he is able to take breaks and exit the classroom at any time without 
            causing a disturbance.
          </div>
        </Fragment>
      )
    ]

    const [document, selectDocument] = useState('document1')
    const [documentText, displayDocument] = useState(documents[0])
  
    const handleDocumentSelection = (event, d) => {
      selectDocument(d)
      switch (d) {
        case "document1": displayDocument(documents[0]); break
        case "document2": displayDocument(documents[1]); break
        case "document3": displayDocument(documents[2]); break
        case "document4": displayDocument(documents[3]); break
        case "document5": displayDocument(documents[4]); break
      }
      console.log(document === d)
    }
  
    return (
      <div className={classes.root}>
        <div className={classes.dashboardContent}>
          <div className={classes.leftColumn}>
            <div className={classes.leftHeader}>
              <Typography variant="h5">Select Document:  </Typography>
              <Typography variant="h5">Date: </Typography>
            </div>
            <div>
              <hr color="black"></hr>                          
              <MenuList className={classes.docScroller}>
                <MenuItem onClick={e => handleDocumentSelection(e, 'document1')} selected={document === 'document1'} className={classes.navItem}>
                  <Typography>ADHD: Late Tests</Typography>
                  <Typography>11-21-2020</Typography>
                </MenuItem>
                <hr></hr>
                <MenuItem onClick={e => handleDocumentSelection(e, 'document2')} selected={document === 'document2'} className={classes.navItem}>
                  <Typography>ADHD: Recorded Lectures</Typography>
                  <Typography>11-12-2020</Typography>
                </MenuItem>
                <hr></hr>
                <MenuItem onClick={e => handleDocumentSelection(e, 'document3')} selected={document === 'document3'} className={classes.navItem}>
                  <Typography>ADHD: Laptop Use</Typography>
                  <Typography>11-10-2020</Typography>
                </MenuItem>
                <hr></hr>
                <MenuItem onClick={e => handleDocumentSelection(e, 'document4')} selected={document === 'document4'} className={classes.navItem}>
                  <Typography>Depression: ES Animal</Typography>
                  <Typography>10-18-2020</Typography>
                </MenuItem>
                <hr></hr>
                <MenuItem onClick={e => handleDocumentSelection(e, 'document5')} selected={document === 'document5'} className={classes.navItem}>
                  <Typography>Depression: Preferred Seating</Typography>
                  <Typography>10-15-2020</Typography>
                </MenuItem>
              </MenuList>

            </div>
            <div className={classes.buttonContainer}>
              <div className={classes.accommodationsButton}>
                <Link href="/home/mydocs/accommodations">
                  <Button variant="contained"
                    style={{
                      width: 250,
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
                </Link>
              </div>
            </div>
          </div>

          <div className={classes.centerColumn}>
            <Divider orientation="vertical"/>
          </div>

          <div className={classes.rightColumn}>
            <Typography variant="h5">
              Exemption Request
              <hr color="black"></hr>
            </Typography>
            <div className={classes.textScroller}>
              <Typography variant="h6">
                Dr. Ham <br></br>
                1234 John Wy. <br></br>
                Los Angeles, CA 90045 <br></br><br></br>
                To the DSS at Loyola Marymount University, <br></br><br></br>
                {documentText}
                <br></br><br></br><br></br>
                - Dr. Ham
              </Typography>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default MyDocs
