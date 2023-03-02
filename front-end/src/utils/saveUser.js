import { USER_KEY } from '../constants';
import localStorageHandling from './localStorageHandling';

export default function saveUser(user) {
  localStorageHandling.setItem(user, USER_KEY);
}

export const getUser = () => localStorageHandling.getItem(USER_KEY);
