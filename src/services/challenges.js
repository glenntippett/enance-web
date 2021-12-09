export const getChallenges = () => {
  return fetch("http://localhost:3000/coding_challenges").then((response) =>
    response.json()
  );
};
