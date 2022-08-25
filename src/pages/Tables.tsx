// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import { Chip, TableHead, Toolbar, Tooltip, Typography } from '@mui/material';
// import teye from '@/public/teye.png';
// import comments from '@/public/comments.svg';
// import tracking from '@/public/tracking.svg';
// import Image from 'next/image';
// import { makeStyles } from '@mui/styles';
// import { Search } from '@mui/icons-material';
// import SearchIcon from '@mui/icons-material/Search';
// import { styled, alpha } from '@mui/material/styles';
// import { InputBase } from '@mui/material';


// function TablePaginationActions(props: { count: any; page: any; rowsPerPage: any; onPageChange: any; }) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event: any) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event: any) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event: any) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event: any) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
    
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// function createData(applicationid: number, applicationtype: string, date: string) {
//   return { applicationid, applicationtype, date };
// }

// const rows = [
//   createData(1, 	"Degree Attestation Service", "5/1/2022"),
//   createData(2, 	"Degree Attestation Service", "5/1/2022"),
//   createData(3, 	"Degree Attestation Service", "5/1/2022"),
//   createData(4, 	"Degree Attestation Service", "5/1/2022"),
//   createData(5, 	"Degree Attestation Service", "5/1/2022"),
//   createData(6, 	"Degree Attestation Service", "5/1/2022"),
//   createData(7, 	"Degree Attestation Service", "5/1/2022"),
//   createData(8, 	"Degree Attestation Service", "5/1/2022"),
//   createData(9, 	"Degree Attestation Service", "5/1/2022"),
//   createData(10, 	"Degree Attestation Service", "5/1/2022"),
//   createData(11, 	"Degree Attestation Service", "5/1/2022"),
//   createData(12, 	"Degree Attestation Service", "5/1/2022"),
//   createData(13, 	"Degree Attestation Service", "5/1/2022"),
// ].sort((a, b) => (a.applicationtype < b.applicationtype ? -1 : 1));

// export default function CustomPaginationActionsTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
  
//     return (
//       <TableContainer component={Paper}>
//         <Toolbar sx={{justifyContent: 'space-between'}}>
//           <Typography >My Applications</Typography>
//         <Search>
//             <SearchIcon></SearchIcon> 
//         </Search>
//         </Toolbar>
        
//       <Table sx={{ minWidth: 500 }} size="small" aria-label="custom pagination table">
//         <TableHead>
//           <TableCell><Typography>APPLICATION ID</Typography></TableCell>
//           <TableCell><Typography>APPLICATION TYPE</Typography></TableCell>
//           <TableCell><Typography>DATE</Typography></TableCell>
//           <TableCell><Typography>STATUS</Typography></TableCell>
//           <TableCell><Typography>FORM DETAILS</Typography></TableCell>
//         </TableHead>
//         <TableBody>
//           {(rowsPerPage > 0
//             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : rows
//           ).map((row) => (
//             <TableRow key={row.applicationid} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//               <TableCell component="th" scope="row">
//                 {row.applicationid}
//               </TableCell>
//               <TableCell >
//                 {row.applicationtype}
//               </TableCell>
//               <TableCell >
//                 {row.date}
//               </TableCell>
//               <TableCell>
//                 <Tooltip title="View Application Status"><Chip label="Saved" sx={{bgcolor: "#84ddff" , color: "#1e87b0"}}></Chip></Tooltip>
//               </TableCell>
//               <TableCell>
//                 <IconButton><Image src={teye} alt="eye" ></Image></IconButton>
//                 <IconButton><Image src={comments} alt="comment" ></Image></IconButton>
//                 <IconButton><Image src={tracking} alt="tracking" ></Image></IconButton>
//               </TableCell>
//             </TableRow>
//           ))}

//           {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TablePagination sx={{color:"#8c9da5"}}
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={5}
//               count={rows.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               SelectProps={{
//                 inputProps: {
//                   'aria-label': 'items per page',
//                 },
//                 native: true,
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//             />
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//     );
//   }
import React from 'react'

const Tables = () => {
  return (
    <div>Tables</div>
  )
}

export default Tables