const HOST = 'localhost';
const PORT = 3001;

export default async function fetchAPI(path, callback, options) {
  try {
    const response = await fetch(`http://${HOST}:${PORT}${path}`, options);
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log(error);
  }
}
