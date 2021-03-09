
 import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "react-bootstrap";
//import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name,Screen_No,seatno, list) {
  return {name, Screen_No,seatno, list };
}

const rows = [
  createData('pqr',2,23,'Samosa,Pepsi'),
  createData('xyz',4,98,'Samosa,Pepsi'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AcceptOrder() {
  const classes = useStyles();

  return (
   <div className="admin">
   <TableContainer component={Paper} style={{marginTop:'100px'}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserName</StyledTableCell>
            <StyledTableCell>Screen_No</StyledTableCell>
            <StyledTableCell >Seat Number</StyledTableCell>
            <StyledTableCell >Order List</StyledTableCell>
            <StyledTableCell >Accept/Reject</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.Screen_No}</StyledTableCell>
              <StyledTableCell >{row.seatno}</StyledTableCell>
              <StyledTableCell >{row.list}</StyledTableCell> 
              <StyledTableCell >
                  <Button color="primary">Accept</Button>|
                  <button type="button" class="btn btn-danger">Reject</button></StyledTableCell> 
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

