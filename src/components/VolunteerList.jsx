import React from 'react';
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

import VolunteerListRow from './VolunteerListRow';

const HeaderTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 'bold',
    color: '#000000',
  },
}));

function VolunteerList({ volunteerRows }) {
  const [page, setPage] = React.useState(0);
  const ROWS_PER_PAGE = 10;

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
                <HeaderTableCell>Email</HeaderTableCell>
                <HeaderTableCell>Phone Number</HeaderTableCell>
                <HeaderTableCell>Vehicle Access</HeaderTableCell>
                <HeaderTableCell>Waiver</HeaderTableCell>
                <HeaderTableCell>Notes</HeaderTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {volunteerRows
                .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
                .map((row) => <VolunteerListRow row={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[ROWS_PER_PAGE]}
          component="div"
          count={volunteerRows.length}
          rowsPerPage={ROWS_PER_PAGE}
          page={page}
          onPageChange={handleChangePage}
        />
      </CardContent>
    </Card>
  );
}

export default VolunteerList;
