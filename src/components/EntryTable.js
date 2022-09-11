import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import EntryModal from './EntryModal';
import * as React from 'react';
import { useState } from 'react';
import { getCategory } from '../utils/categories';
import { sortName } from '../utils/sort';
import { sortLink } from '../utils/sort';

// Table component that displays entries on home screen

export default function EntryTable({ entries, user }) {

   // state variables
   const [nameDirection, setNameDirection] = useState(false);
   const [linkDirection, setLinkDirection] = useState(false);

   // visibility handlers
   const handleClickOpen = () => {
      
   };

   const handleNameDirection = () => {
      setNameDirection(!nameDirection);
      
      sortName(entries, user);
      //sortName(entries, user, nameDirection);
   };

   const handleLinkDirection = () => {
      setLinkDirection(!linkDirection);
   };

   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell>
                     <TableSortLabel onClick={handleNameDirection}>Name</TableSortLabel>
                  </TableCell>
                  <TableCell align="right">
                     <TableSortLabel onClick={(e) => {sortLink(e, entries, user)}}>Link</TableSortLabel>
                  </TableCell>
                  <TableCell align="right">User</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Open</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {entries.map((entry) => (
                  <TableRow
                     key={entry.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component="th" scope="row">
                        {entry.name}
                     </TableCell>
                     <TableCell align="right"><Link href={entry.link}>{entry.link}</Link></TableCell>
                     <TableCell align="right">{entry.user}</TableCell>
                     <TableCell align="right">{getCategory(entry.category).name}</TableCell>
                     <TableCell sx={{ "padding-top": 0, "padding-bottom": 0 }} align="right">
                        <EntryModal entry={entry} type="edit" />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
