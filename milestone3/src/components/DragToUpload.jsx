import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(
    (theme) => ({

      outlineContainer: {
        width: 250,
        height: 250,
        backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'45\' ry=\'45\' stroke=\'grey\' stroke-width=\'15\' stroke-dasharray=\'25\' stroke-dashoffset=\'0\' stroke-linecap=\'round\'/%3e%3c/svg%3e")',
        borderRadius: 45,
      },

      dragPrompt: {
        color: "grey",
        justifyContent: "center",
        alignItems: "center",
      },
    
}))

const DragToUpload = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.outlineContainer}>
      <Typography className={classes.dragPrompt}>
        Drag to upload
      </Typography>
    </div>
  )
}

export default DragToUpload