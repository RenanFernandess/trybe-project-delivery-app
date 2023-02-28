const setItem = (body, key) => {
  localStorage.setItem(key, JSON.stringify(body));
};

const getItem = (key) => JSON.stringify(localStorage.getItem(key) || 'null');

export default {
  setItem,
  getItem,
};
