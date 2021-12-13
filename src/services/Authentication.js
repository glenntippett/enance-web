export const userLogin = async (data) => {
  const response = await fetch('http://localhost:3000/users/sign_in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}
