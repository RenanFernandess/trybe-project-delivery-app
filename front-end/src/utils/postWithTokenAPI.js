import fetchAPI from './fetchAPI';

export default async function postWithTokenAPI(path, callback, body, token) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(body),
  };
  await fetchAPI(path, callback, options);
}
