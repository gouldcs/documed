import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Paper from "@material-ui/core/Paper"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 100,
  },

  dashboardContent: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 25,
    paddingTop: 50,
  },

  tableContainer: {
    width: '90%',
    paddingTop: 50,
  },
}))

function createData(alerts, date) {
  return { alerts, date };
}

const rows = [
  createData('You have 3 new documents', '10/15/20'),
  createData('You have 6 new accommodations', '10/15/20'),
  createData('Your doctors note was rejected', '10/18/20'),
];

const Dashboard = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.dashboard}>
      <div className={classes.dashboardContent}>
        <Typography style={{fontWeight:"bold", fontSize: 24}}>
          Welcome to your DocuMed portal,
        </Typography>
        <Typography style={{fontWeight:"light", fontSize: 28}}>
          Miranda Cosgrove
        </Typography>
        <div className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Alerts</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.alerts}>
                  <TableCell component="th" scope="row" style={{fontWeight:"light",}}>
                    {row.alerts}
                  </TableCell>
                  <TableCell align="right" style={{fontWeight:"light",}}>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard