import axios from 'axios'

const url = 'https://mysterious-dusk-66432.herokuapp.com'

class BlogDataService {
  getAll(page = 0) {
    return axios.get(`${url}/api/v1/blogs?page=${page}`);
  }

  get(id) {
    return axios.get(`${url}/api/v1/blogs/id/${id}`);
  }

  find(query, by = 'title', page = 0) {
    return axios.get(`${url}/api/v1/blogs?${by}=${query}&page=${page}`);
  }
}

export default new BlogDataService();
