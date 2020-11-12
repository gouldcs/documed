import React from 'react'
import ActionPanel from "./ActionPanel"
import ContentPanel from "./ContentPanel"
import Header from "./Header"
import { makeStyles } from '@material-ui/core/styles'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(
    (theme) => ({
        pageLayout: {
            display: 'flex',
            flexDirection: 'column',
        },

        mainContent: {
            display: 'flex',
            flexDirection: 'row',
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

const MainLayout = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.pageLayout}>
        <Header></Header>
        <div className={classes.mainContent}>
            <ActionPanel></ActionPanel>
            <ContentPanel>
                <div className={classes.mainPanelContents}>
                    <Typography variant="h5" gutterBottom className={classes.welcomeMessage}>
                        Welcome to your DocuMed Dashboard,
                    </Typography>
                    <Typography variant="h2" gutterBottom className={classes.patientName}>
                        Raytheon Tole
                    </Typography>
                </div>  
            </ContentPanel>
        </div>
    </div>
  )
}

export default MainLayout