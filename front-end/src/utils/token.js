import localStorageHandling from './localStorageHandling';

const TOKEN_KEY = 'token';

export default function saveToken(token) {
  localStorageHandling.setItem(TOKEN_KEY, token);
}

export const getToken = () => localStorageHandling.getItem(TOKEN_KEY);
