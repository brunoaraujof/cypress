describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
})

describe('My second Teste', function(){
    it('Does not do much!', function(){
        expect(true).to.equal(false)
    })
})

describe('My third teste', function(){
    it('Visitis the Kitchen Sink', function() {
        cy.visit('https://example.cypress.io')

        cy.contains('type')

    })
})