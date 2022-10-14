const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const consultasPorAgendamentosId = {};


//:id é um placeholder
//exemplo: /lembretes/123456/observacoes
app.put('/agendamentos/:id/consultas', (req, res) => {

 });

app.get('/agendamentos/:id/consultas', (req, res) => {

});

app.listen(5000, (() => {
console.log('Consultas. Porta 5000');
}));
