import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(
    (theme) => ({

      outlineContainer: {
        width: 450,
        height: 438,
        backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'45\' ry=\'45\' stroke=\'grey\' stroke-width=\'15\' stroke-dasharray=\'25\' stroke-dashoffset=\'0\' stroke-linecap=\'round\'/%3e%3c/svg%3e")',
        borderRadius: 45,
        justifyContent: "center",
        alignContent: "center",

      },

      dragPrompt: {
        color: "grey",
        align: "center",
        paddingTop: "45%",
      },
    
}))

const DragToUpload = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.outlineContainer}>
      <Typography className={classes.dragPrompt} variant="h4" align="center">
        Drag documents here
      </Typography>
    </div>
  )
}

export default DragToUpload