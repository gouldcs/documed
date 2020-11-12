import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles(
    (theme) => ({

        defaultLayout: {
            paddingTop: 20,
        },

        paper: {
            flex: 1,
            display: 'flex',
            padding: '12px 40px 12px',
        },

        mainPanel: {
            minHeight: 600,
            minWidth: 800,
            maxHeight: 600,
            maxWidth: 800,
            display: 'flex',
            flexDirection: 'column',
        },

}))

const ContentPanel = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.defaultLayout}>
        <div className={classes.mainPanel}>
            <Paper className={classes.paper}>               
            </Paper>  
        </div>
    </div>          
  )
}

export default ContentPanel