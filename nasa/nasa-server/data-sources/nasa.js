import { RESTDataSource } from 'apollo-datasource-rest';

class NasaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.nasa.gov';
  }

  willSendRequest(request) {
    request.params.set('api_key', process.env.NASA_API_KEY);
  }

  async getAPOD() {
    return this.get('/planetary/apod');
  }

  async getNeoWsAsteroidsFeed({ START_DATE, END_DATE }) {
    return this.get(`/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}`);
  }
}

export default NasaAPI;
