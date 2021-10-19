import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

export async function getLoggedIn() {
  return axios.get(new URL(`${REACT_APP_API_URL}/v1/auth/me`), { withCredentials: true })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('No logged in user');
      }
      return response.data;
    })
    .then((user) => user)
    .catch(() => {});
}
