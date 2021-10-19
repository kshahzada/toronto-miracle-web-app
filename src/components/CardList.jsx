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

const HeaderTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 'bold',
    color: '#000000',
  },
}));

function CardList({ contactListRows, isDonorList }) {
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
                <HeaderTableCell align="right">Email</HeaderTableCell>
                {isDonorList ? (
                  <>
                    <HeaderTableCell align="right">Address</HeaderTableCell>
                    <HeaderTableCell align="right">Notes</HeaderTableCell>
                  </>
                ) : (
                  <HeaderTableCell align="right">Phone Number</HeaderTableCell>
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {contactListRows
                .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
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
                      {row.name}
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary' }} align="right">
                      {row.email}
                    </TableCell>

                    {isDonorList ? (
                      <>
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
                          {row.notes}
                        </TableCell>
                      </>
                    ) : (
                      <TableCell sx={{ color: 'text.secondary' }} align="right">
                        {row.phoneNumber}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[ROWS_PER_PAGE]}
          component="div"
          count={contactListRows.length}
          rowsPerPage={ROWS_PER_PAGE}
          page={page}
          onPageChange={handleChangePage}
        />
      </CardContent>
    </Card>
  );
}

export default CardList;
