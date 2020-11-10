import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({

    paperContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',

    backgroundColor: 'lightblue',
    padding: theme.spacing(5),
    justifyContent: 'center',
    alignItems: 'center',
  },

}))

const Dashboard = props => {
  const classes = useStyles(props)
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
     <div className={classes.paperContainer}>
        <Paper className={classes.paper} variant="outlined"></Paper>
    </div>
    </>
      )
}

export default Dashboard