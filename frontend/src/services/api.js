// Import the plugin axios to make the api use
import axios from 'axios';
// Instanciate the api and set the base url
const api = axios.create({
  baseURL: 'http://localhost:3333'
});
// Export the api
export default api;