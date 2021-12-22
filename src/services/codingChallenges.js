import axios from 'axios'

const url = 'https://mysterious-dusk-66432.herokuapp.com'

class CodingChallengeDataService {
  getAll(page = 0) {
    return axios.get(`${url}/api/v1/coding_challenges?page=${page}`);
  }

  get(id) {
    return axios.get(`${url}/api/v1/coding_challenges/id/${id}`);
  }

  find(query, by = 'title', page = 0) {
    return axios.get(`${url}/api/v1/coding_challenges?${by}=${query}&page=${page}`);
  }

  markdown(url) {
    return axios.get(url);
  }
}

export default new CodingChallengeDataService();
