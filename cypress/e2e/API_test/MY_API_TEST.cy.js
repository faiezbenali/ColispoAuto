describe('API Test - GET Users', () => {
  it('should return a list of users', () => {
    cy.request('GET', 'https://example.com/api/users')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
      });
  });
});