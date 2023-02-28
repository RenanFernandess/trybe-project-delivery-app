import { TOKEN_KEY } from '../constants';
import localStorageHandling from './localStorageHandling';

export default function saveToken(token) {
  localStorageHandling.setItem(TOKEN_KEY, token);
}

export const getToken = () => localStorageHandling.getItem(TOKEN_KEY);
