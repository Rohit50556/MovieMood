import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "react-bootstrap";
import { Modal } from "./Modal";

var msg = "";
var qry = "";
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(no, name, email) {
  return { no, name, email };
}

function createArr(email, query) {
  return { email, query };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const UserQuery = () => {
  const classes = useStyles();
  var rows = [];

  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  const [query, setQuery] = useState([{}]);

  useEffect(() => {
    fetch("/Query/getAllQuery")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("err");
        }
      })
      .then((jsonRes) => setQuery(jsonRes));
  }, []);

  var arr = [];
  var i = 0;
  query.forEach((ele) => {
    i++;
    rows.push(createData(i, ele.userName, ele.email));
    arr.push(createArr(ele.email, ele.query));
    //  console.log(ele._id)
  });

  function handleClick(event) {
    setShow(true);
    console.log();
    msg = arr[event.target.value - 1].email;
    qry = arr[event.target.value - 1].query;
    console.log(msg + "==" + qry);
  }

  var temp = [];
  for (let i of rows) if (i.name) i && temp.push(i);

  rows = temp;

  console.log("show=" + show);

  return (
    <>
      <div className="admin">
        <Modal
          messageto={msg}
          query={qry}
          show={show}
          close={closeModalHandler}
        />

        <TableContainer
          component={Paper}
          style={{
            marginTop: "100px",
            marginLeft: "-950px",
            marginRight: "200px",
          }}
        >
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Index</StyledTableCell>
                <StyledTableCell>UserName</StyledTableCell>
                <StyledTableCell>EmailIs</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell>{row.no}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      color="primary"
                      value={row.no}
                      onClick={handleClick}
                    >
                      Answer
                    </Button>
                    |
                    <button type="button" value={row.no} class="btn btn-danger">
                      Delete
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default UserQuery;
