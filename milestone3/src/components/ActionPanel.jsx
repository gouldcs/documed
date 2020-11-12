import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(
    (theme) => ({
        defaultSetup: {
            minHeight: 719,
            minWidth: 351,
            maxHeight: 719,
            maxWidth: 351,
            paddingTop: 128,
            display: 'flex',
            flexDirection: 'row',
        },

        paper: {
            flex: 1,
            display: 'flex',
            padding: '12px 40px 12px',
        },

        actionPanel: {
            paddingRight: 24,
        },

        navItem: {
            fontSize: 24,
            paddingTop: 24,
            paddingBottom: 24,
        },

        mainPanel: {
            minHeight: 719,
            minWidth: 1080,
            maxHeight: 720,
            maxWidth: 351,
            display: 'flex',
            flexDirection: 'column',
        },

        mainPanelContents: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
        },

        welcomeMessage: {
            fontWeight: "bold",
            paddingTop: 36,
        },

        patientName: {
            fontWeight: "thin",
            paddingTop: 12,
        }
}))

const ActionPanel = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.defaultSetup}>
        <div className={classes.actionPanel}>
            <Paper className={classes.paper}>
                <MenuList className={classes.navigation}>
                    <MenuItem className={classes.navItem}>Dashboard</MenuItem>
                    <MenuItem className={classes.navItem}>MyDocs</MenuItem>
                    <MenuItem className={classes.navItem}>Upload Docs</MenuItem>
                    <MenuItem className={classes.navItem}>Contact Doctor</MenuItem>
                    <MenuItem className={classes.navItem}>Contact DSS</MenuItem>
                </MenuList>
            </Paper>  
        </div>
        <div className={classes.mainPanel}>
            <Paper className={classes.paper}>
                <div className={classes.mainPanelContents}>
                    <Typography variant="h5" gutterBottom className={classes.welcomeMessage}>
                        Welcome to your DocuMed Dashboard,
                    </Typography>
                    <Typography variant="h2" gutterBottom className={classes.patientName}>
                        Raytheon Tole
                    </Typography>
                </div>                
            </Paper>  
        </div>          
    </div>
  )
}

export default ActionPanel