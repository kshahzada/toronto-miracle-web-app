import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import CardNumber from './CardNumber';

function Stats({ row }) {
  return (
    <Grid item xs={12}>
      <Card
        variant="outlined"
        sx={{
          bgcolor: 'transparent', color: 'text.secondary', border: '1px solid black', width: '97%', padding: '1%',
        }}
      >
        <Grid container alignItems="top" spacing={2}>
          <Grid item xs={12}>
            <Typography sx={{
              fontSize: 25,
              fontWeight: 'bolder',
            }}
            >
              {row.name}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <CardNumber
              metricNumber={row.hub}
              metricDescription="Assigned Hub"
              isText
            />
          </Grid>

          <Grid item xs={4}>
            <CardNumber
              metricNumber={row.captains}
              metricDescription="Captains"
              isText
            />
          </Grid>

          <Grid item xs={2}>
            <CardNumber
              metricNumber={row.numDonations}
              metricDescription="Number of Donations"
            />
          </Grid>

          <Grid item xs={2}>
            <CardNumber
              metricNumber={row.numVols}
              metricDescription="Number of Volunteers"
            />
          </Grid>
        </Grid>
      </Card>

    </Grid>
  );
}

export default Stats;
