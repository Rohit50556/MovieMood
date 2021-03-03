




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
import { Modal } from './Modal';


//import Button from '@material-ui/core/Button';



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

function createData(no,name,email,pno) {
  return {no,name,email,pno };
}

function createArr(email,query) {
  return {email,query};
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const UserQuery = ()=> {
  const classes = useStyles();
        var rows=[]

    const [show, setShow] = useState(false);

    const closeModalHandler = () => setShow(false);

    const [query,setQuery]=useState([{
    }])

    useEffect(()=>{
      fetch('/Query/getAllQuery').then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
          console.log("err")
        }
      }).then(jsonRes => setQuery(jsonRes))
    },[])



    var arr=[]
    var i=0;
      query.forEach(ele=>{
        i++
        rows.push(createData(i,ele.userName,ele.email,ele.mobile));
        arr.push(createArr(ele.email,ele.query))    
        //  console.log(ele._id)
      })  
    
   // console.log(rows)
     
   function handleClick(event){
    setShow(true)
    console.log()
    msg=arr[event.target.value-1].email
    qry=arr[event.target.value-1].query
    console.log(msg+"=="+qry)
    
  }
    
      var temp=[]
      for(let i of rows)
        if(i.name)
          i && temp.push(i);
      
      rows=temp;  

      

  return (
<>
  
   <div className="admin">
   <Modal messageto={msg} query={qry} show={show} close={closeModalHandler} />
  
    <TableContainer component={Paper} style={{marginTop:'100px',marginLeft:'-950px',marginRight:"200px"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Index</StyledTableCell>
            <StyledTableCell>UserName</StyledTableCell>
            <StyledTableCell>EmailIs</StyledTableCell>
            <StyledTableCell >Phone Number</StyledTableCell>
            <StyledTableCell ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
            
            <StyledTableCell >
                {row.no}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.email}</StyledTableCell>
              <StyledTableCell >{row.pno}</StyledTableCell>
              <StyledTableCell >
                  <Button color="primary" value={row.no} onClick={handleClick}>Answer</Button>|
                  <button type="button" value={row.no} class="btn btn-danger">Delete</button></StyledTableCell> 
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  </>
  );
}


export default UserQuery;
































// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import "../css/UserQuery.css";
// import React, { useState,useEffect} from 'react';
// import { Modal } from './Modal';


// const columns = [
//   { id: 'no', label: 'No', minWidth: 140 },
//   { id: 'name', label: 'UserName', minWidth: 140 },
//   { id: 'email', label: 'EmailId', minWidth: 100 },
//   { id: 'pno', label: 'PhoneNumber', minWidth: 100 },
 
// ];

// var msg=""
// var qry=""
// function createData(no,name, email, pno) {
//   return {no, name, email, pno };
// }

// function createArr(email,query) {
//   return {email,query};
// }

// const useStyles = makeStyles({
//   root: {
//     width: '80%',
//   },
//   container: {
//     maxHeight: 440,
//   },
// });



// const UserQuery =()=> {
  
// const [query,setQuery]=useState([{
// }])
// var rows=[]


//   useEffect(()=>{
//     fetch('/Query/getAllQuery').then(res=>{
//       if(res.ok){
//           return res.json()
//       }
//       else{
//         console.log("err")
//       }
//     }).then(jsonRes => setQuery(jsonRes))
//   },[])

// var arr=[]
// var i=0;
//   query.forEach(ele=>{
//     i++
//     rows.push(createData(i,ele.userName,ele.email,ele.mobile));
//     arr.push(createData(ele.email,ele.query))    
//     //  console.log(ele._id)
//   })  
// //console.log(arr)

//   const [show, setShow] = useState(false);

//   const closeModalHandler = () => {
    
//     setShow(false);
    
//   }
  // function handleClick(event){
  //   setShow(true)
  //   //console.log("hello="+arr[event.target.value])
  //   msg=arr[event.target.value-1].no
  //   qry=arr[event.target.value-1].name
  //   console.log(msg+"=="+qry)
    
  // }

//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <div className="userQuery">
//     <Modal message={msg} query={qry} show={show} close={closeModalHandler} />
    
//     <Paper style={{marginTop:'200px',marginLeft:'-900px'}} className={classes.root}>
//       <TableContainer className={classes.container}>
//         <Table >
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                     </TableCell>
//                   );
//                   })}
//                   { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
//                   <button style={{marginTop:"10px"}} value={row.no} onClick={handleClick}>Answer</button>
//                   <button style={{marginLeft:"10px"}}>Remove</button>      

//                </TableRow>
              
//               );
              
//             })
//             } 
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={100}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//       />      

//     </Paper>
            
//     </div>   
//   );
// }

// export default UserQuery;


































