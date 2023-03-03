const setItem = (body, key) => {
  localStorage.setItem(key, JSON.stringify(body));
};

const getItem = (key) => JSON.parse(localStorage.getItem(key) || 'null');

export default {
  setItem,
  getItem,
};
