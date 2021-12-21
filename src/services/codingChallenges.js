import axios from 'axios'

class CodingChallengeDataService {
  getAll(page = 0) {
    return axios.get(`http://localhost:5000/api/v1/coding_challenges?page=${page}`);
  }

  get(id) {
    return axios.get(`http://localhost:5000/api/v1/coding_challenges/id/${id}`);
  }

  find(query, by = 'title', page = 0) {
    return axios.get(`http://localhost:5000/api/v1/coding_challenges?${by}=${query}&page=${page}`);
  }

  markdown(url) {
    return axios.get(url);
  }
}

export default new CodingChallengeDataService();
