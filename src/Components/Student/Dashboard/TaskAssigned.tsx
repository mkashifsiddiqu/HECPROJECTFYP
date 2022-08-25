/* eslint-disable prettier/prettier */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {
  Grid,
  TextField,
  Typography,
} from '@mui/material';

function TablePaginationActions(props: {
  count: any;
  page: any;
  rowsPerPage: any;
  onPageChange: any;
}) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: any) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: any) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: any) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: any) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === `rtl` ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === `rtl` ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === `rtl` ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === `rtl` ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  conPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  cardsPerPage: PropTypes.number.isRequired,
};

function createData(
  applicationid: number,
  applicationtype: string,
  date: string,
) {
  return { applicationid, applicationtype, date };
}

const rows = [
  createData(1, `Degree Attestation Service`, `5/1/2022`),
  createData(2, `Degree Attestation Service`, `5/1/2022`),
  createData(3, `Degree Attestation Service`, `5/1/2022`),
  createData(4, `Degree Attestation Service`, `5/1/2022`),
  createData(5, `Degree Attestation Service`, `5/1/2022`),
  createData(6, `Degree Attestation Service`, `5/1/2022`),
  createData(7, `Degree Attestation Service`, `5/1/2022`),
  createData(8, `Degree Attestation Service`, `5/1/2022`),
  createData(9, `Degree Attestation Service`, `5/1/2022`),
  createData(10, `Degree Attestation Service`, `5/1/2022`),
  createData(11, `Degree Attestation Service`, `5/1/2022`),
  createData(12, `Degree Attestation Service`, `5/1/2022`),
  createData(13, `Degree Attestation Service`, `5/1/2022`),
].sort((a, b) => (a.applicationtype < b.applicationtype ? -1 : 1));

const cards = [
  createData(1, `Degree Attestation Service`, `5/1/2022`),
  createData(2, `Degree Attestation Service`, `5/1/2022`),
].sort((a, b) => (a.applicationtype < b.applicationtype ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [cardsPerPage, setCardsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const emptyCards =
    page > 0 ? Math.max(0, (1 + page) * cardsPerPage - cards.length) : 0;

  const handleChangePage = (
    event: any,
    newPage: React.SetStateAction<number>,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeCardsPerPage = (event: { target: { value: string } }) => {
    setCardsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <Box margin={`1em`}>
      <TableContainer component={Paper}>
        <Box padding={`0.5em`}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                fontFamily={`montserrat`}
                fontSize={`0.75rem`}
                fontWeight={`600`}
                color={`#0000008a`}
              >
                TASKS ASSIGNED TO ME
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: `flex`, flexDirection: `row-reverse` }}>
                <TextField
                  sx={{
                    fontFamily: `montserrat`,
                    fontSize: `0.80rem`,
                    fontWeight: `500`,
                    color: `#000`,
                  }}
                  label="Filter"
                  variant="standard"
                  size="small"
                ></TextField>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Table
          sx={{ minWidth: 500 }}
          size="small"
          aria-label="custom pagination table"
        >
          <Box
            sx={{ display: `flex`, justifyContent: `center`, padding: `3em` }}
          >
            <Typography
              color={`red`}
              fontFamily={`montserrat`}
              fontWeight={`700`}
            >
              NO RECORDS FOUND
            </Typography>
          </Box>
        </Table>
      </TableContainer>
    </Box>
  );
}
