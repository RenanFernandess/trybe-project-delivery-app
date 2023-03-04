const HOST = 'localhost';
const PORT = 3001;

export default async function deleteAPI(path) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    await fetch(`http://${HOST}:${PORT}${path}`, options);
  } catch (error) {
    console.log(error);
  }
}
