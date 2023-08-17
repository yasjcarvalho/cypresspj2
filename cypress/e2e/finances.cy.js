describe('Transações', () => {
  // hooks -> executar antes ou depois / de cada ou de todos os testes
  // before
  // after
  // beforeEach
  // afterEach

  beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/#')
    cy.wait(1000)
  })
  //criarTransacao('Freela', 100): Isso chama uma função chamada criarTransacao com dois argumentos: 'Freela' (descrição da transação) e 100 (valor)
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
    criarTransacao('Mesada', 10)

    // cy.contains('.description', 'Freela') // td -> referencia
    //   .parent('') //tr -> volta  uma linha  para o elemento pai
    //   .find('img') // elemento que a gente precisa
    //   .click()

    cy.contains('.description', 'Freela') // td-> referencia
      .siblings() //sobrinhos
      .children('img') //filho do irmão, um dos sobrinhos
      .click()

    cy.get('tbody tr').should('have.length', 1) //assertion
  })
})
//.parent(''): Aqui, o método .parent('') é chamado no elemento encontrado anteriormente, que efetivamente navega para o elemento pai desse elemento na árvore do DOM.

//.find('img'): Este método .find('img') procura um elemento <img> dentro do elemento pai. Isso provavelmente está buscando um ícone de exclusão.
//criar função auxliar
function criarTransacao(descricao, valor) {
  cy.contains('Nova Transação').click()
  cy.get('#description').type(descricao)
  cy.get('#amount').type(valor)
  cy.get('#date').type('2023-02-15') //yyyy-mm-dd
  cy.contains('button', 'Salvar').click()
}
//function criarTransacao(descricao, valor) { ... }: Aqui é definida uma função chamada criarTransacao, que aceita dois parâmetros: descricao (descrição da transação) e valor (valor
// https://docs.cypress.io/guides/references/assertions O QUE VALIDAR NO PROJETO?????
