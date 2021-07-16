describe('test-lib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testcmpcomponent--primary&args=input1;input2;'));
  it('should render the component', () => {
    cy.get('nx-test-cmp').should('exist');
  });
});