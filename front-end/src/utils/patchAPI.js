import fetchAPI from './fetchAPI';

export default async function patchAPI(path, callback, body, token = '') {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(body),
  };
  await fetchAPI(path, callback, options);
}
