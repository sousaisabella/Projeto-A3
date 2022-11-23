const express = require('express')
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();
server.use(session({secret: 'test1'}));
const agendamentos = []
server.use(express.static(path.join(__dirname, 'views')));
server.engine('html', require('ejs').renderFile);
server.use(bodyParser.urlencoded({extended: true}));
server.set('view engine', 'html');
server.set('views', path.join(__dirname, '/views'));
const logins = [
    {
        'email' : 'test@test.com',
        'password' : '123'
    },
    {
        'email' : 'test2@test.com',
        'password' : '321'
    },
]
// const email = 'test@test.com'
// const password = '123'

server.post('/', (req, res) => {
    try{
        for (i = 0; i < logins.length; i++) {
            if (req.body.email == logins[i].email && req.body.password == logins[i].password) {
                req.session.email = logins[i].email;
                res.redirect('/agendar');
            }
        }
    } catch {
        res.redirect('/login');
    }
})

server.get('/', (req, res) => {
    if(req.session.email) {
        res.redirect('/agendar');
    }
    else{
        res.render('login');
    }
})

server.get('/login', (req, res) => {
    if(req.session.email) {
        res.render('logado', { email : req.session.email });
    }
    else{
        res.redirect('/')
    }
})

server.post('/agendar', (req, res) => {
    agendamentos.push({
        data : req.body.data,
        nome_paciente : req.body.nome_paciente,
        horario_consulta : req.body.horario_consulta,
        email_paciente : req.body.email_paciente,
        informacoes_adicionais : req.body.informacoes_adicionais,
    })
    res.render('agendar')
})

server.get('/agendar', (req, res) => {
    if(req.session.email) {
        res.render('agendar');
    }
    else{
        res.render('login');
    }
})

server.get('/agendamentos', (req, res) => {
    if(req.session.email) {
        res.render('agendamentos', { lista_de_agendamento : agendamentos })
    }
    else{
        res.render('login');
    }
})

server.listen(4000, () => {
    console.log('Server running in port 4000...')
});
