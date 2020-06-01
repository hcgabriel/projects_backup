var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('Requisição para rota /');
    return res.send('Rota inicial!');
});

app.listen(80, function () {
    console.log('AplicaÃ§Ã£o rodando na porta 80');
});
