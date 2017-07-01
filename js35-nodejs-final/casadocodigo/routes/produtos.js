const ProdutoDao = require('../dao/ProdutoDao')

function produtosRoutes(app) {
  app.get('/produtos', (req, res) => {
    const produtoDao = new ProdutoDao()

    produtoDao.lista((err, result, fields) => {
      if (err) {
        res.render('503', {err})
      } else {
        const lista = result
        const qtd = result.length

        res.format({
          html: () => {
            res.render('produtos/lista', {lista, qtd})
          },
          json: () => {
            res.json(lista)
          }
        })
      }
    })
  })
  app.post('/produtos', (req, res) => {
    req.assert('titulo', 'Título deve ser preenchido').notEmpty()
    req.assert('preco', 'Preço deve ser um número').isFloat()
    req.assert('preco', 'Preço tem que ser maior que 5').maiorQue(5)
    const errors = req.validationErrors()

    if (errors) {
      res.format({
        html: function() {
          res.status(400).render('produtos/form', {errors})
        },
        json: function() {
          res.status(400).json(errors)
        }
      })

      return
    }

    const livro = req.body
    const produtoDao = new ProdutoDao()

    produtoDao.insere(livro, (err, result, fields) => {
      if (err) {
        res.render('503', {err})
      } else {
        res.redirect('/produtos')
      }
    })
  })

  app.get('/produtos/form', (req, res) => {
    res.render('produtos/form')
  })
}

module.exports = produtosRoutes
