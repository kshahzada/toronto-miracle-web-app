import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

export async function login(credentials, setError) {
  return axios.post(new URL(`${REACT_APP_API_URL}/v1/auth/authenticate`), credentials, { withCredentials: true })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Login unsuccessful');
      }
      return response.data;
    })
    .then((user) => user)
    .catch(() => setError());
}
