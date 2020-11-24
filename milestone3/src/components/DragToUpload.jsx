import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(
    (theme) => ({

      outlineContainer: {
        width: 250,
        height: 225,
        borderColor: "grey",
        borderStyle: "dashed",
        borderWidth: "medium",
        borderBlock: "20",
        borderRadius: 25,
        justifyContent: "center",
        alignContent: "center",

      },

      dragPrompt: {
        color: "grey",
        align: "center",
        paddingTop: "38%",
      },
    
}))

const DragToUpload = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.outlineContainer}>
      <Typography className={classes.dragPrompt} variant="h6" align="center">
        Drag documents here
      </Typography>
    </div>
  )
}

export default DragToUpload