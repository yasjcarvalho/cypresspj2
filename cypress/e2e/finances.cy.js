describe('Transações', () => {
  // hooks -> executar antes ou depois / de cada ou de todos os testes
  // before
  // after
  // beforeEach
  // afterEach

  beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/#')
  })

  it('Cadastrar uma entrada', () => {
    criarTransacao('Freela', 250)

    cy.get('tbody tr td.description').should('have.text', 'Freela')
  })

  it('Cadastrar uma saída', () => {
    criarTransacao('Cinema', -45)
    cy.get('tbody tr td.description').should('have.text', 'Cinema')
  })

  it('Excluir transação', () => {
    criarTransacao('Freela', 100)
    cy.contains('.description', 'Freela')
    .parent('') //volta  uma linha  para o elemento pai
    .find('img')
    .click()
  })
})

//criar função auxliar
function criarTransacao(descricao, valor) {
  cy.contains('Nova Transação').click()
  cy.get('#description').type(descricao)
  cy.get('#amount').type(valor)
  cy.get('#date').type('2023-02-15') //yyyy-mm-dd
  cy.contains('button', 'Salvar').click()
}

// https://docs.cypress.io/guides/references/assertions O QUE VALIDAR NO PROJETO?????
