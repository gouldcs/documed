import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(
    (theme) => ({

        pageName: {
            fontWeight: "bold",
            fontSize: 24,
            color: '#000000',
        },
}))

const MainLayout = (props) => {
  const classes = useStyles(props)

  return (
    <Typography className={classes.pageName}>
        Dashboard
    </Typography>
  )
}

export default MainLayout