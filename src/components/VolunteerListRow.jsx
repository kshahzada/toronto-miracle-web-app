import React, { useContext } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { UserContext } from '../contexts/UserContext';
import { updateVolunteer } from '../api/apiMethods';

function VolunteerListRow({ row }) {
  const { user } = useContext(UserContext);

  const [notes, setNotes] = React.useState(row.notes);
  const [notesEdited, setNotesEdited] = React.useState(false);
  const [notesSaveError, setNotesSaveError] = React.useState('');

  const handleChange = (event) => {
    setNotes(event.target.value);
    setNotesEdited(event.target.value !== row.notes);
    setNotesSaveError(false);
  };

  const handleNotesSave = async () => {
    const updatedVolunteer = await updateVolunteer(
      user.team,
      row.userId,
      {
        fields: {
          notes: notes,
        },
      },
      setNotesSaveError,
    );

    if (updatedVolunteer && 'notes' in updatedVolunteer) {
      setNotes(updatedVolunteer.notes);
      setNotesEdited(false);
    }
  };

  return (
    <TableRow
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
        {row.number}
      </TableCell>
      <TableCell>
        <Checkbox
          sx={{
            '&.Mui-disabled': {
              color: '#199ed9',
            },
          }}
          disabled
          checked={!!row.vehicleAccess}
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
          checked={!!row.waiver}
        />
      </TableCell>
      <TableCell>
        <Stack
          alignItems="flex-end"
          spacing={1}
        >
          <TextField
            id="captain-vol-notes"
            error={notesSaveError !== ''}
            helperText={notesSaveError}
            hiddenLabel
            fullWidth
            multiline
            maxRows={4}
            value={notes}
            onChange={handleChange}
            variant="filled"
            color="info"
            sx={{
              '.MuiInputBase-input': {
                color: '#000000',
              },
            }}
          />
          {notesEdited && <Button variant="contained" size="small" onClick={handleNotesSave}>Save</Button>}
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default VolunteerListRow;
