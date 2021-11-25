import React from 'react';
import Grid from '@mui/material/Grid';

import Stats from './Stats';

function NeighbourhoodsStatsList({ neighbourhoodsStatsRows }) {
  return (
    <Grid container spacing={1}>
      {neighbourhoodsStatsRows
      ?.map((row) => (
        <Stats row={row} />
      ))
}      
    </Grid>
  );
}

export default NeighbourhoodsStatsList;
