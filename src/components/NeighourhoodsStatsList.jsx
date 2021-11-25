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

function NeighbourhoodsStatsList({ neighbourhoodsStatsRows }) {
  const [page, setPage] = React.useState(0);
  const ROWS_PER_PAGE = 100;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Grid container justifyContent="flex-end" spacing={1}>
      <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ExportListButton data={neighbourhoodsStatsRows} filename="neighbourhood-stats-list.csv" headers={["name", "captains", "numVols", "numDonations", "hub"]}/>
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
                    <HeaderTableCell>Neighbourhood</HeaderTableCell>
                    <HeaderTableCell align="right">Captains</HeaderTableCell>
                    <HeaderTableCell align="right">Number of Volunteers</HeaderTableCell>
                    <HeaderTableCell align="right">Number of Donations</HeaderTableCell>
                    <HeaderTableCell align="right">Assigned Hub</HeaderTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {neighbourhoodsStatsRows
                    ?.slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
                    .map((row) => (
                      <TableRow
                        key={row.neighbourhoodId}
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
                        <TableCell
                          sx={{ color: 'text.secondary' }}
                          align="right"
                        >
                          {row.captains}
                        </TableCell>
                        <TableCell
                          sx={{ color: 'text.secondary' }}
                          align="right"
                        >
                          {row.numVols}
                        </TableCell>
                        <TableCell
                          sx={{ color: 'text.secondary' }}
                          align="right"
                        >
                          {row.numDonations}
                        </TableCell>
                        <TableCell
                          sx={{ color: 'text.secondary' }}
                          align="right"
                        >
                          {row.hub}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[ROWS_PER_PAGE]}
              component="div"
              count={neighbourhoodsStatsRows?.length}
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

export default NeighbourhoodsStatsList;
