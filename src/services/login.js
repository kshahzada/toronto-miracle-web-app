const { REACT_APP_API_URL } = process.env;

export async function login(credentials, setError) {
  return fetch(new URL(`${REACT_APP_API_URL}/v1/auth/authenticate`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'same-origin',
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Login unsuccessful');
      }
      return response.json();
    })
    .then((user) => user)
    .catch(() => setError());
}
