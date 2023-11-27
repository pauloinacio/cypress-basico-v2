Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function()
{
        const longTest = 'teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste'
        cy.get('#firstName').type('Teste First')
        cy.get('#lastName').type('Teste lastname')
        cy.get('#email').type('teste@teste.com.br')
        cy.get('#open-text-area').type(longTest , {delay: 0})
        cy.get('button[type="submit"').click()
        cy.get('.success > strong').should('be.visible')
})
