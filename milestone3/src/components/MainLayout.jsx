import React from 'react'
import MenuPanel from "./MenuPanel"
import ContentPanel from "./ContentPanel"
import Header from "./Header"
import { makeStyles } from '@material-ui/core/styles'
import PageName from './PageName'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    (theme) => ({
        pageLayout: {
            display: 'flex',
            flexDirection: 'column',
            background:'#111111',
        },

        mainContentContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },

        mainContent: {
            display: 'flex',
            flexDirection: 'row',
            paddingTop: 10,
        },

        pageNameContainer: {
            paddingTop: 40,
            paddingLeft: 400,
        },

        mainPanelContents: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
        },

        mainPanelContents: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
        },

        welcomeMessage: {
            fontWeight: 'bold',
            paddingTop: 36,
        },

        patientName: {
            fontWeight: 'thin',
            paddingTop: 12,
        }
}))

const MainLayout = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.pageLayout}>
        <Header></Header>
        <div className={classes.pageNameContainer}>
            <PageName></PageName>
        </div>
        <div className={classes.mainContentContainer}>
            <div className={classes.mainContent}>
                <MenuPanel></MenuPanel>
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
    </div>
  )
}

export default MainLayout
