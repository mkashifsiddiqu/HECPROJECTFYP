import React from 'react';
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
import SearchIcon from '@mui/icons-material/Search';
import CachedIcon from '@mui/icons-material/Cached';
import {
  Button,
  Card,
  Chip,
  Divider,
  Grid,
  Hidden,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import edit from '@/public/gedit.svg';
import download from '@/public/gdownload.svg';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const Domain = process.env.Domain
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
  // createData(8, 	"Degree Attestation Service", "5/1/2022"),
  // createData(9, 	"Degree Attestation Service", "5/1/2022"),
  // createData(10, 	"Degree Attestation Service", "5/1/2022"),
  // createData(11, 	"Degree Attestation Service", "5/1/2022"),
  // createData(12, 	"Degree Attestation Service", "5/1/2022"),
  // createData(13, 	"Degree Attestation Service", "5/1/2022"),
].sort((a, b) => (a.applicationtype < b.applicationtype ? -1 : 1));

const cards = [
  createData(1, `Degree Attestation Service`, `5/1/2022`),
  createData(2, `Degree Attestation Service`, `5/1/2022`),
].sort((a, b) => (a.applicationtype < b.applicationtype ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const Router =useRouter()
 
  //To Use this in Application
  const list = useSelector((state) => state.stdLoginReducer.userData)
  const {email} = list.data
  //For Page 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [cardsPerPage, setCardsPerPage] = React.useState(5);
  //Application State 
  const [ApplicationList, setApplicationList] = React.useState([])
  //=============================For Application list get from Data Base
  const getExistApplication = async()=>{
    const data ={email}
    const res = await fetch(`${Domain}/api/Student/Application/getExistApplication`, {
      method: `POST`, //BECAUSE WE CHECK WITH EMAIL 
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if(response.success)
    {
      const {Application} =response
      
       if(Application.length>0){
        setApplicationList(Application)
       }
      console.log(`Applicatin :`,Application)
    }
   }   
  //Call Application 
  React.useEffect(() => {
    
    getExistApplication()
  }, [])
  
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
            <Grid item xs={12} md={4}>
              <Typography
                fontFamily={`montserrat`}
                fontSize={`1rem`}
                color={`#0000008a`}
                fontWeight={700}
              >
                MY APPLICATIONS
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
            <Button 
            disableRipple disableTouchRipple disableFocusRipple 
            startIcon={<CachedIcon sx={{backgroundColor:`#369f75`, color:`#fff`, borderRadius:`50%`}} />} 
            sx={{textTransform:`none`, color:`rgba(51,51,51,.85)!important`}}
            onClick={getExistApplication}
            >Refresh Section</Button>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box sx={{ display: `flex`, flexDirection: `row-reverse` }}>
              <TextField
                  placeholder='Application id, Application Status'
                  InputLabelProps={{style: {fontSize: 14}}}
                  sx={{'& input::placeholder':{fontSize:`10px`,color:`black`}}}
                  InputProps={{
                    style: {fontSize: 14,fontFamily: `montserrat`},
                    endAdornment:(<SearchIcon fontSize='small'/>)}}
                  color='success'
                  label="Filter"
                  variant="standard"
                  size="small"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider/>
       { ApplicationList.length > 0 &&
        <Table
          sx={{ minWidth: 500 }}
          size="small"
          aria-label="custom pagination table"
        >
          <Hidden mdDown>
            <TableBody>
              
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    APPLICATION ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    APPLICATION TYPE
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    DATE
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    STATUS
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    EDIT/VIEW
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    DOWNLOAD FORM
                  </Typography>
                </TableCell>
              </TableRow>
              {(rowsPerPage > 0
                ? ApplicationList.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )
                : ApplicationList
              ).map((row) => (
              <TableRow
               key={row._id}
                  sx={{
                    // '&:last-child td, &:last-child th': { border: 0 },
                    '&:nth-of-type(odd)': { background: `#f5f9fc` },
                  }}
                >
                  <TableCell
                    sx={{
                      fontFamily: `montserrat`,
                      fontSize: `0.80rem`,
                      color: `#000`,
                      fontWeight: 500,
                    }}
                    component="th"
                    scope="row"
                  >
                    {row._id}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: `montserrat`,
                      fontSize: `0.80rem`,
                      color: `#000`,
                      fontWeight: 500,
                    }}
                  >
                    {row.Application_Type}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: `montserrat`,
                      fontSize: `0.80rem`,
                      color: `#000`,
                      fontWeight: 500,
                      fontSize:`13px`,
                    }}
                  >
                    {new Date(row.Date).toLocaleDateString()}
                   
                  </TableCell>
                  <TableCell>
                  {row.Status ==`save` && 
                    <Tooltip title="View Application Status">
                     
                    <Chip clickable sx={{fontSize:`10px`, fontWeight:`600` , color:`#0491ca` , backgroundColor:`#84dcff`, '&:hover':{color:`#fff` , backgroundColor:`#1ebfff`}}} variant='filled' label={`Saved`} /> 
                     {/* {row.Status ==`Reject` &&
                     <Chip clickable sx={{fontSize:`10px`, fontWeight:`600`, color:`red` , backgroundColor:`rgb(255 0 0 / 10%)`, '&:hover':{color:`#fff` , backgroundColor:`#fb4545`}}} variant='filled' label="Rejected" />} */}
                    </Tooltip>}
                    {row.Status ==`Reject` && 
                    <Tooltip title="View Application Status">
                    <Chip clickable sx={{fontSize:`10px`, fontWeight:`600`, color:`red` , backgroundColor:`rgb(255 0 0 / 10%)`, '&:hover':{color:`#fff` , backgroundColor:`#fb4545`}}} variant='filled' label="Rejected" />
                    </Tooltip>}
                    {row.Status ==`submit` && 
                    <Tooltip title="View Application Status">
                    <Chip clickable color={`info`} variant='filled' label="Submitted" 
                    sx={{fontSize:`10px`, fontWeight:`600`}}
                    />
                    </Tooltip>}
                     {row.Status ==`Verify` && 
                    <Tooltip title="View Application Status">
                    <Chip clickable color={`success`} variant='filled' label="Verified" 
                    sx={{fontSize:`10px`, fontWeight:`600`}}
                    />
                    </Tooltip>}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={()=>{Router.push(`/DegreeAttestation/${row._id}`)}}>
                      <Image src={edit} alt="edit"></Image>
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton sx={{ height: `1em`, width: `1.2em` }}>
                      <Image src={download} alt="download"></Image>
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
                  ? ApplicationList.slice(
                      page * cardsPerPage,
                      page * cardsPerPage + cardsPerPage,
                    )
                  : ApplicationList
                ).map((card) => (
                  // eslint-disable-next-line react/jsx-key
                  <Card
                    sx={{
                      backgroundColor: `#eef8ff`,
                      marginLeft: `0.625rem`,
                      marginRight: `0.625rem`,
                      marginTop: `1.25rem`,
                      marginBottom: `1.25rem`,
                      padding: `1em`,
                      bordercolor: `#C5C5C5`,
                      border: `1px`,
                    }}
                    elevation={0}
                    key={card._id}
                  >
                    <Grid container>
                      <Grid item xs={4} marginBottom={`0.9375rem`}>
                        <Typography
                          fontFamily={`montserrat`}
                          fontSize={`0.6875rem`}
                          color={`#000000de`}
                          fontWeight={700}
                        >
                          APPLICATION ID
                        </Typography>
                        <Typography
                          fontFamily={`montserrat`}
                          fontSize={`0.6875rem`}
                          color={`#000`}
                          fontWeight={500}
                        >
                          {card._id}
                        </Typography>
                      </Grid>
                      <Grid item xs={8} marginBottom={`0.9375rem`}>
                        <Box
                          sx={{ display: `flex`, justifyContent: `flex-end` }}
                        >
                          <Tooltip title="View Application Status">
                            <Chip
                              label="Saved"
                              sx={{ bgcolor: `#84ddff`, color: `#1e87b0` }}
                            ></Chip>
                          </Tooltip>
                        </Box>
                      </Grid>
                      <Grid item xs={12} marginBottom={`0.9375rem`}>
                        <Typography
                          fontFamily={`montserrat`}
                          fontSize={`0.6875rem`}
                          color={`#000000de`}
                          fontWeight={700}
                        >
                          APPLICATION TYPE
                        </Typography>
                        <Typography
                          fontFamily={`montserrat`}
                          fontSize={`0.6875rem`}
                          color={`#000`}
                          fontWeight={500}
                        >
                          {card.Application_Type}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        marginBottom={`0.9375rem`}
                        sx={{
                          display: `flex`,
                          justifyContent: `space-between`,
                        }}
                      >
                        <Box>
                          <Typography
                            fontFamily={`montserrat`}
                            fontSize={`0.6875rem`}
                            color={`#000000de`}
                            fontWeight={700}
                          >
                            DATE
                          </Typography>
                          <Typography
                            fontFamily={`montserrat`}
                            fontSize={`0.6875rem`}
                            color={`#000`}
                            fontWeight={500}
                          >
                            {new Date(card.Date).toISOString().slice(0, 10)}
                          </Typography>
                        </Box>
                        <Box >
                        <IconButton >
                            <Image src={edit} alt="edit" />
                          </IconButton>
                          <IconButton sx={{ height: `1em`, width: `1.2em` }}>
                            <Image src={download} alt="download"></Image>
                          </IconButton>
                        </Box>
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
                rowsPerPageOptions={[5, 10, 25, { label: `All`, value: -1 }]}
                colSpan={6}
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
        </Table> }
        { ApplicationList.length == 0 && 
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
          }
      </TableContainer>
      
    </Box>
  );
}
