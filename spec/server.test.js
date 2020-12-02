const supertest = require('supertest');

const request = supertest('http://localhost:3001');

describe('GET route for product', () => {
  it('should successfully access GET route', (done) => {
    request.get('/api/products/49').expect(200).expect(res => {
      expect(res.status).toEqual(200);
    }).end(done);
  });

  it('should return a 404 if the product id is not in the request', (done) => {
    request.get('/api/product').expect(404).expect(res => {
      expect(res.status).toEqual(404);
    }).end(done);
  });
});