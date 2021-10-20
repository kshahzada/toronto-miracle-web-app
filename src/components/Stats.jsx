import React from 'react';
import Grid from '@mui/material/Grid';
import CardNumber from './CardNumber';

function Stats({ volunteerListRows, donorListRows }) {
  return (
    <Grid item xs={3}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={3}>
          <CardNumber
            metricNumber={volunteerListRows.length}
            metricDescription="Number of Volunteers"
          />
        </Grid>

        <Grid item xs={3}>
          <CardNumber
            metricNumber={donorListRows.length}
            metricDescription="Number of Donors"
          />
        </Grid>

        <Grid item xs={3}>
          <CardNumber
            metricNumber={3}
            metricDescription="Number of Larger Food Drives"
          />
        </Grid>

        <Grid item xs={3}>
          <CardNumber
            metricNumber={12}
            metricDescription="Number of Volunteer Vehicles"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Stats;
