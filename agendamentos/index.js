const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const agendamentos = {};
contador = 0

app.get ('/agendamentos', (req, res) => {
    res.send(agendamentos);
});
app.put ('/agendamentos', (req, res) => {
    contador++;
    const { texto } = req.body;
    agendamentos[contador] = {
    contador, texto
    }
res.status(201).send(agendamentos[contador]);
});

app.listen(4000, () => {
console.log('Agendamentos. Porta 4000');

});