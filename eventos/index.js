const express = require ('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express();
app.use(bodyParser.json());

app.post ('/evento/agendamentos', (req, res) => {
    axios.put('http://localhost:4000/agendamentos/',{texto: req.body.texto})
    res.status(200).send({msg: 'ok'})
});

app.listen(4040, () => {
console.log('Agendamentos. Porta 4040');

});