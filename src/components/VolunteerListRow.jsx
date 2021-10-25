import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function VolunteerListRow({ row }) {
  const [notes, setNotes] = React.useState(row.captainsNotes);
  const [notesEdited, setNotesEdited] = React.useState(false);

  const handleChange = (event) => {
    setNotes(event.target.value);
    setNotesEdited(event.target.value !== row.captainsNotes);
  };

  return (
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
      <TableCell sx={{ color: 'text.secondary' }}>
        {row.email}
      </TableCell>
      <TableCell sx={{ color: 'text.secondary' }}>
        {row.phoneNumber}
      </TableCell>
      <TableCell>
        <Checkbox
          sx={{
            '&.Mui-disabled': {
              color: '#199ed9',
            },
          }}
          disabled
          checked={row.vehicleAccess}
        />
      </TableCell>
      <TableCell>
        <Checkbox
          sx={{
            '&.Mui-disabled': {
              color: '#199ed9',
            },
          }}
          disabled
          checked={row.waiver}
        />
      </TableCell>
      <TableCell>
        <Stack
          alignItems="flex-end"
          spacing={1}
        >
          <TextField
            id="captain-vol-notes"
            hiddenLabel
            fullWidth
            multiline
            maxRows={4}
            value={notes}
            onChange={handleChange}
            variant="filled"
            sx={{
              '.MuiInputBase-input': {
                color: '#000000',
              },
            }}
          />
          {notesEdited && <Button variant="contained" size="small">Save</Button>}
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default VolunteerListRow;