import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles(
    (theme) => ({

        defaultLayout: {
            display: 'flex',
            flexDirection: 'column',
        },

        paper: {
            flex: 1,
            display: 'flex',
            padding: '12px 40px 12px',
            background: '#F8F8F8',
            borderRadius: 20,
        },

        mainPanel: {
            minHeight: 600,
            minWidth: 900,
            maxHeight: 600,
            maxWidth: 900,
            display: 'flex',
            flexDirection: 'column',
        },

}))

const ContentPanel = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.defaultLayout}>
        <div className={classes.mainPanel}>
            <Paper className={classes.paper} elevation={3}>     
                <div className={classes.panelContents}>
                </div>   
            </Paper>  
        </div>
    </div>          
  )
}

export default ContentPanel