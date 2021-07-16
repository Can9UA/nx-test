describe('memorizer', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testcomponentcomponent--primary&args=input1;input2;'));
  it('should render the component', () => {
    cy.get('nx-test-test-component').should('exist');
  });
});