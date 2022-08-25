/* eslint-disable prettier/prettier */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {
  Card,
  Chip,
  Grid,
  Hidden,
  Input,
  InputLabel,
  TableHead,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import teye from '../../public/teye.png';
import comments from '../../public/comments.svg';
import tracking from '../../public/tracking.svg';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
const useStyles = makeStyles({
  box: {
    margin: `1em`,
  },
  h1: {
    fontFamily: `montserrat`,
    fontSize: `1rem`,
    color: `#797D86`,
    fontWeight: `bold`,
  },
  h1text: {
    fontFamily: `montserrat`,
    fontSize: `0.75rem`,
    color: `#0000008a`,
    fontWeight: `600`,
    marginTop: `0.75rem`,
    marginBottom: `0.75rem`,
  },
  text: {
    fontFamily: `montserrat`,
    fontSize: `0.80rem`,
    color: `#000`,
    fontWeight: `500`,
  },
  trow: {
    height: `0.625rem`,
  },
  hbox: {
    paddingTop: `0.5em`,
    paddingBottom: `0.5em`,
  },
  card: {
    backgroundColor: `#eef8ff`,
    marginLeft: `0.625rem`,
    marginRight: `0.625rem`,
    marginTop: `1.25rem`,
    marginBottom: `1.25rem`,
    padding: `1em`,
    bordercolor: `#C5C5C5`,
    border: `1px`,
  },
  cardh: {
    fontFamily: `montserrat`,
    fontcolor: `#000000de`,
    fontSize: `0.6875rem`,
    fontWeight: `bold`,
  },
  cardt: {
    fontFamily: `montserrat`,
    fontSize: `0.6875rem`,
    color: `#000`,
    fontWeight: `500`,
  },
  gcell: {
    marginBottom: `0.9375rem`,
  },
  chip: {
    backgroundColor: `#84dcff`,
    fontFamily: `montserrat`,
    padding: `0.5em 0.2em`,
    fontWeight: `500`,
    color: `#0491ca`,
    cursor: `pointer`,
    '&:hover': {
      backgroundcolor: `#41a7fa`,
      color: `#fff`,
    },
    fontSize: `0.65rem`,
  },
});

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
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [cardsPerPage, setCardsPerPage] = React.useState(25);

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
  const classes = useStyles();
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box className={classes.box}>
          <Box className={classes.hbox}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography className={classes.h1}>MY APPLICATIONS</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: `flex`, flexDirection: `row-reverse` }}>
                  <TextField
                    className={classes.text}
                    label="Filter"
                    variant="standard"
                    size="small"
                  ></TextField>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 500 }}
              size="small"
              aria-label="custom pagination table"
            >
              <Hidden mdDown>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography className={classes.h1text}>
                        APPLICATION ID
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.h1text}>
                        APPLICATION TYPE
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.h1text}>DATE</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.h1text}>STATUS</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.h1text}>
                        FORM DETAILS
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                      )
                    : rows
                  ).map((row) => (
                    <TableRow
                      key={row.applicationid}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        className={classes.text}
                        component="th"
                        scope="row"
                      >
                        {row.applicationid}
                      </TableCell>
                      <TableCell className={classes.text}>
                        {row.applicationtype}
                      </TableCell>
                      <TableCell className={classes.text}>{row.date}</TableCell>
                      <TableCell>
                        <Tooltip title="View Application Status">
                        <Chip clickable sx={{fontSize:`10px`, fontWeight:`600` , color:`#0491ca` , backgroundColor:`#84dcff`, '&:hover':{color:`#fff` , backgroundColor:`#1ebfff`}}} variant='filled' label="Saved" />
                        {/* <Chip clickable sx={{fontSize:'10px', fontWeight:"600", color:'red' , backgroundColor:"rgb(255 0 0 / 10%)", '&:hover':{color:'#fff' , backgroundColor:"#fb4545"}}} variant='filled' label="Rejected" /> */}
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <Image src={teye} alt="eye"></Image>
                        </IconButton>
                        <IconButton>
                          <Image src={comments} alt="comment"></Image>
                        </IconButton>
                        <IconButton>
                          <Image src={tracking} alt="tracking"></Image>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}

                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Hidden>
              <Hidden mdUp>
                <TableBody>
                  <Box>
                    {(cardsPerPage > 0
                      ? cards.slice(
                          page * cardsPerPage,
                          page * cardsPerPage + cardsPerPage,
                        )
                      : cards
                    ).map((card) => (
                      // eslint-disable-next-line react/jsx-key
                      <Card className={classes.card} elevation={0}>
                        <Grid container>
                          <Grid item xs={4} className={classes.gcell}>
                            <Typography className={classes.cardh}>
                              APPLICATION ID
                            </Typography>
                            <Typography className={classes.cardt}>
                              {card.applicationid}
                            </Typography>
                          </Grid>
                          <Grid item xs={8} className={classes.gcell}>
                            <Box
                              sx={{
                                display: `flex`,
                                justifyContent: `flex-end`,
                              }}
                            >
                              <Tooltip title="View Application Status">
                                <Chip
                                  label="Saved"
                                  sx={{ bgcolor: `#84ddff`, color: `#1e87b0` }}
                                ></Chip>
                              </Tooltip>
                            </Box>
                          </Grid>
                          <Grid item xs={12} className={classes.gcell}>
                            <Typography className={classes.cardh}>
                              APPLICATION TYPE
                            </Typography>
                            <Typography className={classes.cardt}>
                              {card.applicationtype}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} className={classes.gcell}>
                            <Typography className={classes.cardh}>
                              DATE
                            </Typography>
                            <Typography className={classes.cardt}>
                              {card.date}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} className={classes.gcell}>
                            <IconButton>
                              <Image src={teye} alt="eye"></Image>
                            </IconButton>
                            <IconButton>
                              <Image src={comments} alt="comment"></Image>
                            </IconButton>
                            <IconButton>
                              <Image src={tracking} alt="tracking"></Image>
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Card>
                    ))}
                  </Box>
                </TableBody>
              </Hidden>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    sx={{ color: `#8c9da5` }}
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: `All`, value: -1 },
                    ]}
                    colSpan={5}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        'aria-label': `items per page`,
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </motion.div>
    </>
  );
}
CustomPaginationActionsTable.layout = `Student`