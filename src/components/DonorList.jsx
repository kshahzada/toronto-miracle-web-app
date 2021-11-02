import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import { getDonors, getFoodDrives } from '../api/apiMethods';
import { UserContext } from '../contexts/UserContext';

const HeaderTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 'bold',
    color: '#000000',
  },
}));

function DonorList({ isFoodDriveList }) {
  const [page, setPage] = React.useState(0);
  const ROWS_PER_PAGE = 10;

  const [donorListRows, setDonorListRows] = useState([]);
  const [foodDriveListRows, setFoodDriveListRows] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      if ('neighbourhoods' in user) {
        const donors = await getDonors(user.neighbourhoods[0]);
        setDonorListRows(donors);

        const foodDrives = await getFoodDrives(user.neighbourhoods[0]);
        setFoodDriveListRows(foodDrives);
      }
    };
    getData();
  }, [user]);

  const donorRows = isFoodDriveList ? foodDriveListRows : donorListRows;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card sx={{ bgcolor: 'secondary.main', color: 'text.primary' }}>
      <CardContent sx={{ marginBottom: '-2em' }}>
        <TableContainer
          sx={{ height: '55vh', overflow: 'scroll' }}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <HeaderTableCell>Name</HeaderTableCell>
                <HeaderTableCell align="right">Email</HeaderTableCell>
                <HeaderTableCell align="right">Address</HeaderTableCell>
                <HeaderTableCell align="right">Postal Code</HeaderTableCell>
                <HeaderTableCell align="right">Pick Up Notes</HeaderTableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {donorRows
                ?.slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
                .map((row) => (
                  <TableRow
                    key={row.email}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell
                      sx={{ color: 'text.secondary' }}
                      component="th"
                      scope="row"
                    >
                      {row.firstName}
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary' }} align="right">
                      {row.email}
                    </TableCell>
                    <TableCell
                      sx={{ color: 'text.secondary' }}
                      align="right"
                    >
                      {row.address}
                    </TableCell>
                    <TableCell
                      sx={{ color: 'text.secondary' }}
                      align="right"
                    >
                      {row.postalCode}
                    </TableCell>
                    <TableCell
                      sx={{ color: 'text.secondary' }}
                      align="right"
                    >
                      {row.pickUpNotes}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[ROWS_PER_PAGE]}
          component="div"
          count={donorRows?.length}
          rowsPerPage={ROWS_PER_PAGE}
          page={page}
          onPageChange={handleChangePage}
        />
      </CardContent>
    </Card>
  );
}

export default DonorList;
