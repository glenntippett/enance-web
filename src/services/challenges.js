export const getChallenges = async () => {
  const response = await fetch("http://localhost:3000/coding_challenges");
  return await response.json();
};

export const getChallenge = async (id) => {
  const response = await fetch(`http://localhost:3000/coding_challenges/${id}`);
  return await response.json();
};
