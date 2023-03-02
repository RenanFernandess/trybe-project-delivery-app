import getAPI from './getAPI';
import USER_KEY, { localStorageHandling } from '.';

const { email } = localStorageHandling.getItem(USER_KEY);
console.log(email);

const user = { id: '' };
// const setUser = ;

const getUserId = async () => {
//   await getAPI(
//     `/email/:${email}`,
//     ({ id }) => { user.id = id; },
//   );

  return user.id;
};

export default getUserId;
