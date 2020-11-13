import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderImage from '../assets/doc-header.jpg'
import { colors } from '@material-ui/core';


const useStyles = makeStyles(
  (theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: "bold",
      alignSelf: 'center',
      color: '#FFFFFF',
      paddingTop: 40,
      paddingBottom: 40,
    },
  }),
  { name: "Header" }
)

const Header = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{alignItems:'center',
                                        background:'#1F5780'}}>
        <Toolbar variant="regular">
          <Typography variant="h2" className={classes.title}>
            DocuMed
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
