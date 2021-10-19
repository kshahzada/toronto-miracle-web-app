const { REACT_APP_API_URL } = process.env;

export async function getLoggedIn() {
  return fetch(new URL(`${REACT_APP_API_URL}/v1/auth/me`), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'same-origin',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('No logged in user');
      }
      return response.json();
    })
    .then((user) => user)
    .catch(() => {});
}
