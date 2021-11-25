import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CardNumber({ metricNumber, metricDescription, isText }) {
  return (
    <Card
      sx={{ bgcolor: 'secondary.main', color: 'text.primary' }}
    >
      <CardContent sx={{ marginBottom: '-1em' }}>
        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          {metricDescription}
        </Typography>

        <Typography
          sx={{ fontSize: isText ? 20 : 40, textAlign: 'center' }}
        >
          {metricNumber}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardNumber;
