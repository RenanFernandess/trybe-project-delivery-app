import getAPI from './getAPI';
import { localStorageHandling } from '.';
// import USER_KEY from '../components';

const email = localStorageHandling.getItem('user');

const user = { id: '' };

const getUserId = async () => {
  if (email !== '') {
    await getAPI(
      `/login/email/${email.email}`,
      ({ id }) => { user.id = id; },
    );
  }
  return user.id;
};

export default getUserId;
