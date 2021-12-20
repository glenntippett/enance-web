export const getChallenges = async () => {
  const response = await fetch("http://localhost:3000/coding_challenges");
  return await response.json();
};

export const getChallenge = async () => {
  // const response = await fetch(`http://localhost:3000/coding_challenges/${id}`);
  // return await response.json();

  // Markdown call
  const response = await fetch('https://enance.s3.ap-southeast-2.amazonaws.com/test-markdown.md');
  return await response.text();
};
