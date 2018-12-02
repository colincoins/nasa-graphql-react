import { RESTDataSource } from 'apollo-datasource-rest';

class NasaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.nasa.gov';
    // https://api.nasa.gov/planetary/apod
    // https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
  }

  willSendRequest(request) {
    request.params.set('api_key', process.env.NASA_API_KEY);
  }

  async getAPOD() {
    return this.get('/planetary/apod');
  }

  async getNeoWsAsteroids({ START_DATE, END_DATE }) {
    // START_DATE & END_DATE: YYYY-MM-DD
    return this.get(`/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}`);
  }
}

export default NasaAPI;
