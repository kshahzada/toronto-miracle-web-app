import api from './apiBase';
import { createVolData } from './apiHelpers';

export async function getLoggedIn() {
  return api.get('/v1/auth/me')
    .then((response) => response.data)
    .catch(() => {});
}

export async function login(credentials, setError) {
  return api.post('/v1/auth/authenticate', credentials)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        setError('Invalid Email and/or Phone Number');
      } else {
        setError('Site / Network Error, please try again later');
      }
    });
}

export async function getVolunteers(token) {
  let volunteerListAcc = [];

  return api(`/v1/neighbourhoods/${token}/volunteers/`)
    .then((response) => {
      const volunteers = response.data.message;

      volunteers.forEach((record) => {
        volunteerListAcc = [
          ...volunteerListAcc,
          createVolData(
            record.id,
            record['First Name'],
            record['Last Name'],
            record.Email,
            record['Phone Number'],
            record['Vehicle Access'],
            record.Waiver,
            record.captainsNotes,
          ),
        ];
      });

      return volunteerListAcc;
    })
    .catch(() => []);
}

export async function updateVolunteer(userId, fields, setError) {
  return api.post(`/v1/volunteers/${userId}/update/`, fields)
    .then((response) => response.data.message)
    .catch((error) => {
      if (error.response) {
        setError('Error in saving.');
      } else {
        setError('Site / Network Error, please try again later.');
      }
    });
}
