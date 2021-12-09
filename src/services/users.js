export const getLatestUsers = () => {
	return fetch("http://localhost:3000/recent_users").then((response) =>
    response.json()
  );
};
