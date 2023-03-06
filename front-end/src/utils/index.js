import fetchAPI from './fetchAPI';
import postAPI from './postAPI';
import localStorageHandling from './localStorageHandling';
import saveUser, { getUser } from './saveUser';
import getAPI from './getAPI';
import patchAPI from './patchAPI';
import deleteAPI from './deleteAPI';
import postWithTokenAPI from './postWithTokenAPI';

export default fetchAPI;
export {
  postAPI,
  localStorageHandling,
  saveUser,
  getUser,
  getAPI,
  patchAPI,
  deleteAPI,
  postWithTokenAPI,
};
