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
import Grid from '@mui/material/Grid';

import ExportListButton from './ExportListButton';

const HeaderTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 'bold',
    color: '#000000',
  },
}));

function DonorList({ donorRows }) {
  const [page, setPage] = React.useState(0);
  const ROWS_PER_PAGE = 100;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Grid container justifyContent="flex-end" spacing={1}>
      <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ExportListButton data={donorRows} filename="donor-list.csv" headers={["address", "notes"]}/>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ bgcolor: 'secondary.main', color: 'text.primary' }}>
          <CardContent sx={{ marginBottom: '-2em' }}>
            <TableContainer
              sx={{ height: '55vh', overflow: 'scroll' }}
              component={Paper}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <HeaderTableCell>Address</HeaderTableCell>
                    <HeaderTableCell align="right">Pick Up Notes</HeaderTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {donorRows
                    ?.slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
                    .map((row) => (
                      <TableRow
                        key={row.userId}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell
                          sx={{ color: 'text.secondary' }}
                          align="left"
                        >
                          {row.address}
                        </TableCell>
                        <TableCell
                          sx={{ color: 'text.secondary' }}
                          align="right"
                        >
                          {row.notes}
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
      </Grid>
    </Grid>
  );
}

export default DonorList;
