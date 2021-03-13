import React, { useState,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from "react-bootstrap";
import axios from 'axios';

var msg=""
var qry=""
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

function createData(no,UserName,Useremail,UserSeatNumber) {
  return {no,UserName,Useremail,UserSeatNumber };
}

function createArr(email,query) {
  return {email,query};
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const SwapRequest = ()=> {


  var [data,setData]=useState([{}]);
  useEffect(()=>{
    fetch("/SwapSeatRequest/getSwapSeatDataByUserName/"+localStorage.getItem("UserName")).then(res=>{
      if(res.ok)
        return res.json()
      else  
        console.log("err")
    }).then(jsonres=>setData(jsonres))
  },[])
  
  console.log("==========")
  console.log(data.length)
  



  const classes = useStyles();
      


    var rows=[]
    var seatno1=0
    var seatno2=0
    var id1=""
    var id2=""
    

   var i=0;
   if(typeof data[0]=== 'undefined'){}
    else {
      data.forEach(ele=>{
        if(ele.username1===undefined){}
        else{
        if(!ele.SwapStatus)
        {
          i++
          id1=ele.Booking_ID1
          id2=ele.Booking_ID2
          seatno1=ele.SeatNo1[0]
          seatno2=ele.SwapSeatNo
          rows.push(createData(i,ele.username1,ele.email1,ele.SeatNo1[0]));
      }}})  
    }
    
     
   function handleClick(){
     var setno={
       sno1:seatno1,
       sno2:seatno2,
       id1:id1,
       id2:id2
     }
     console.log(setno)
     axios.post("/Booking/swapSeat",setno,{})

    }
    


  return (
<>
  
   <div className="admin">
   {/* style={{marginTop:'100px'}} */}
    <TableContainer component={Paper} style={{marginTop:'50px'}} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Index</StyledTableCell>
            <StyledTableCell>UserName</StyledTableCell>
            <StyledTableCell>UserEmail</StyledTableCell>
            <StyledTableCell>UserSeatNumber</StyledTableCell>
            <StyledTableCell></StyledTableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
            
            <StyledTableCell >
                {row.no}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.UserName}
              </StyledTableCell>
              <StyledTableCell >{row.Useremail}</StyledTableCell>
              <StyledTableCell >{row.UserSeatNumber}</StyledTableCell>
              <StyledTableCell >
                  <Button style={{backgroundColor:'green'}} value={row.no} onClick={handleClick}>Accept</Button>
              </StyledTableCell> 
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </>
  );
}


export default SwapRequest;












































