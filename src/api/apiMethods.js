import api from './apiBase';
import { createVolData, createDonorData,  createDriveData} from './apiHelpers';

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

export async function logout(setLogoutErrorShow) {
  return api.post('/v1/auth/logout')
    .then((response) => response.data)
    .catch(() => setLogoutErrorShow(true));
}

export async function getVolunteers(neighbourhood) {
  let volunteerListAcc = [];

  return api(`/v1/neighbourhoods/${neighbourhood}/volunteers/`)
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

export async function updateVolunteer(neighbourhood, userId, fields, setError) {
  return api.post(`/v1/neighbourhoods/${neighbourhood}/volunteers/${userId}/updateNotes/`, fields)
    .then((response) => response.data.message)
    .catch((error) => {
      if (error.response) {
        setError('Error in saving.');
      } else {
        setError('Site / Network Error, please try again later.');
      }
    });
}

export async function getDonors(team) {
  let donorsAcc = [];

  return api(`/v1/teams/${team}/donors/`)
    .then((response) => {
      const donors = response.data.message;

      donors.forEach((record) => {
        donorsAcc = [
          ...donorsAcc,
          createDonorData(
            record.userId,
            record.address,
            record.notes,
            record.team,
            record.neighbourhood,
          ),
        ];
      });

      return donorsAcc;
    })
    .catch(() => []);
}

export async function getFoodDrives(team) {
  let foodDrivesAcc = [];

  return api(`/v1/teams/${team}/food-drives/`)
    .then((response) => {
      const foodDrives = response.data.message;

      foodDrives.forEach((record) => {
        foodDrivesAcc = [
          ...foodDrivesAcc,
          createDriveData(
            record.userId,
            record.email,
            record.name,
            record.address,
            record.notes,
            record.foodDrive,
            record.team,
            record.neighbourhood
          ),
        ];
      });

      return foodDrivesAcc;
    })
    .catch(() => []);
}
