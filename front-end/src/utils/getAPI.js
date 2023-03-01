import fetchAPI from './fetchAPI';

export default async function getAPI(path, callback) {
  await fetchAPI(path, callback);
}
