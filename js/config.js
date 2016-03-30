const baseUrl = process.env.NODE_ENV == 'dev' ? 'http://localhost:7001' : 'http://frontenddevinterview.azurewebsites.net'; 

export default {
  endpoint: baseUrl + '/api/products'
}
