import fetchAPI from './fetchAPI';

export default async function postWithTokenAPI(path, callback, body, token) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.stringify(token),
    },
    body: JSON.stringify(body),
  };
  await fetchAPI(path, callback, options);
}
