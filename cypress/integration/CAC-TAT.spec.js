/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function()
    {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function()
    {
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('preenche os campos obrigatórios e envia o formulário', function()
    {
        const longTest = 'teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste'
        cy.get('#firstName').type('Teste First')
        cy.get('#lastName').type('Teste lastname')
        cy.get('#email').type('teste@teste.com.br')
        cy.get('#open-text-area').type(longTest , {delay: 0})
        cy.get('button[type="submit"').click()
        cy.get('.success > strong').should('be.visible')
        
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function()
    {
        const longTest = 'teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste'
        cy.get('#firstName').type('Teste First')
        cy.get('#lastName').type('Teste lastname')
        cy.get('#email').type('teste@teste,com,br')
        cy.get('#open-text-area').type(longTest , {delay: 0})
        cy.get('button[type="submit"').click()
        cy.get('.error').should('be.visible')
        
    })

    it('Validar campo telefone', function()
    {
        cy.get('#phone').type('abc').should('have.value' ,'')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function()
    {
        const longTest = 'teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste'
        cy.get('#firstName').type('Teste First')
        cy.get('#lastName').type('Teste lastname')
        cy.get('#email').type('teste@teste.com.br')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type(longTest , {delay: 0})
        cy.get('button[type="submit"').click()

        cy.get('.error').should('be.visible')
    })

    it('Limpar Nome', function()
    {
        cy.get('#firstName').type('Teste First').should('have.value' , 'Teste First')
        .clear()
        .should('have.value' , '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function()
    {
        cy.get('button[type="submit"').click()
        cy.get('.error').should('be.visible')
    })
    
    it('envia o formuário com sucesso usando um comando customizado', function()
    {
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success > strong').should('be.visible')
    })

    it('Usando contains', function()
    {
        const longTest = 'teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste teste Teste Teste Teste'
        cy.get('#firstName').type('Teste First')
        cy.get('#lastName').type('Teste lastname')
        cy.get('#email').type('teste@teste.com.br')
        cy.get('#open-text-area').type(longTest , {delay: 0})
        cy.contains('button','Enviar').click()

        cy.get('.success > strong').should('be.visible')
        
    })

    it('seleciona um produto (YouTube) por seu texto', function()
    {
        cy.get('#product').select('YouTube').should('have.value' , 'youtube')
        cy.get('#product').select('mentoria').should('have.value' , 'mentoria')
        cy.get('#product').select(1).should('have.value' , 'blog')
        
    })

    it('marca o tipo de atendimento "Feedback"', function()
    {
        cy.get('input[type="radio"][value="feedback"]').check()
       
        
    })
    it('marca o tipo de atendimento "Feedback"', function()
    {
        cy.get('input[type="radio"]')
        .each(function($radio)
        {
            cy.wrap($radio).check()
            cy.wrap($radio).check().should('be.checked')
        })
       
        
    })
    


    
  })
