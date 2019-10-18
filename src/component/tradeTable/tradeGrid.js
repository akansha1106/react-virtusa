import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Table,TableBody,TableCell,TableHead,TableRow} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
    root: {
      width: '50%',
      display:'flex',
    },
    table: {
      minWidth: '100px',
      height:'120px',
      borderWidth:'0px',
      borderCollapse:'collapse',
      
    },
    tablecell:{
    fontSize:'small',
     },
    header:{
      fontSize:'smaller',
      fontWeight:'600',
      backgroundColor:'white',
    }
  }));
export default function SimpleTable() {
const classes = useStyles();
  return (
    <Paper className={classes.root}>
    <Table className={classes.table}
      size="small"
      aria-label="a dense table">
       <TableHead className={classes.tableHead}>
         <TableRow>
            <TableCell align="center" className={classes.header}>Trade Id</TableCell>
            <TableCell align="center" className={classes.header}>Trade Date</TableCell>
            <TableCell align="center" className={classes.header}>Trade Amount</TableCell>
            <TableCell align="center" className={classes.header}>Trade State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      <TableRow>
      <TableCell align="center" className={classes.header}></TableCell>
            <TableCell align="center" className={classes.header}></TableCell>
            <TableCell align="center" className={classes.header}></TableCell>
            <TableCell align="center" className={classes.header}></TableCell> 
            </TableRow>
         </TableBody>
      </Table>
      </Paper>
      
  );
}
