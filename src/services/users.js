export const getLatestUsers = async () => {
	const response = await fetch("http://localhost:3000/recent_users");
  return await response.json();
};
