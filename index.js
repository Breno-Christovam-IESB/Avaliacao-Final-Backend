const express = require('express')
const app = express()
const servidor = express()
const bodyParser = require('body-parser')
const postgres = require('pg')
const array = [1, 2, 3]
const meuArray = [0]
let contador = 0

const [a, ,b] = array 
console.log(a)
console.log(b)

const pool = new postgres.Pool({
    user: 'usuarioiesb',
    host: 'localhost',
    database: 'todo',
    password: '123456',
    port: '5432'
})

let meuObjeto = {
    nome: 'jose',
    cpf: '22211133344',
    email: 'jose.doe@email.com'
}

const {nome, cpf, email} = meuObjeto
console.log(nome, cpf, email)

app.use((req, res, next) => {
    console.log("Primeiro Middleware funcionando")
    
    next()
})

app.get('/rotaa', async function(req, res) { const
    resQuery = await pool.query('SELECT * FROM users')
    console.log(resQuery)
    res.send(resQuery)

})

app.post('/rotaa', (req, res, next) => {
    console.log(`Usuario na rota: ${nome}`)
    res.send(`Usuario na rota: ${nome}`)
    next()
})

app.use((req, res, next) => {
    console.log("Segundo Middleware funcionando")
    
    next()
})

app.get('/inserirusuario/:nome', async function(req, res) { const
    nomeUsuario = req.params.nome
    const resultadoQuery = await pool.query(`SELECT * FROM users WHERE nome = ${nomeUsuario}`)
    console.log(resultadoQuery)
    res.send(resultadoQuery)

})

app.post('/inserirusuario/:nome', (req, res, next) => {
    console.log(`Inseri o usuario: ${nome}`)
    res.send(`Inseri o usuario: ${nome}`)
    next()
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log("Terceiro Middleware funcionando")
    
    next()
})

app.get('/pelobody', (req, res) => {
    console.log(`Inseri o usuario pelo body: ${nome}`)
    res.send(`Inseri o usuario pelo body: ${nome}`)

})

 app.post('/pelobody', async (req, res, next) => {
   const nome = await req.body.nome 
   console.log(req.body)
   res.send(`Dado recebido no body: ${nome}`)

   next()
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    contador++
    console.log("Requisicoes totais:", ++contador)
    console.log(`Requisicoes totais:, ${contador}, solicitação feita em: ${new Date()}`)

    next()
})

app.get('/rota', (req, res) => {
    console.log('Olá mundo!')
    res.send('Olá Mundo!')

})

app.post('/rota', async function (requisicao, resposta, next) {
        const nome =  requisicao.body.nome
        const user = await requisicao.body.user
        const host = await requisicao.body.host
        const database = await requisicao.body.database
        const password = await requisicao.body.password
        const port = await requisicao.body.port
        const email = await requisicao.body.email
        const cpf = await requisicao.body.cpf
        console.log(requisicao.body)
        resposta.send(`Dados recebidos no body: ${nome}, ${user}, ${host}, ${database}, ${password}, ${port}, ${email}, ${cpf}`)

        next()
    })

app.listen(3000, () => {
    console.log("Escutando na porta 3000")

})

app.listen(3001, () => {
    console.log("Escutando na porta 3001")

})

try {
    throw new Error("Não foi possível fazer o login.")
    } catch (erro) {
    console.error("Erro encontrado:", erro) //PS: Criei um erro qualquer para simular uma leitura entre 
    console.error("Erro ocorrido: 557!") //o processo do encontro do "erro" e o calculo da identificação do erro 557.
    }
