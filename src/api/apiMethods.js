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
        setError('Invalid Email and/or Phone Number. If you haven\'t confirmed your participation as a captain, please do so. Your access may take up to 24hrs to take effect. If problems persist, please email contact@torontomiracle.org for support.');
      } else {
        setError('Site / Network Error, please try again later. Please email contact@torontomiracle.org for support.');
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
            record['First Name'],
            record['Last Name'],
            record.Email,
            record['Phone Number'],
            record['Vehicle Access'],
            record.Waiver,
          ),
        ];
      });

      return volunteerListAcc;
    })
    .catch(() => []);
}
