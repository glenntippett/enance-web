export const userLogin = async (data) => {
  console.log(JSON.stringify(data));
  return await fetch("http://localhost:3000/users/sign_in", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const userSignUp = async (data) => {
  const user = { user: data }
  console.log(JSON.stringify(user));
  return await fetch("http://localhost:3000/users", {
    method: "POST",
    redirect: 'follow',
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => {
    if (response.redirected) {
      window.location.href = 'http://localhost:3001/';
    }
  }).catch((err) => {
    console.info('Problem signing up', err);
  });
};
