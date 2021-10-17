const { REACT_APP_API_URL } = process.env;

export async function login(credentials) {
  return fetch(new URL(`${REACT_APP_API_URL}/login`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    // .then(data => data.json())
    .then('fake_token');
}
