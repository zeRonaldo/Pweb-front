var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

app.use(express.static('public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/login.html'));
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/cadastro.html'));
});
app.get('/header', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/header.html'));
});
app.get('/user', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/usuario.html'));
});
app.get('/event', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/evento.html'));
});
app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/busca.html'));
});
app.get('/new', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/criarevento.html'));
});
app.get('/footer', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/footer.html'));
});
app.get('/cardvnl', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/card-vaga-nao-logado.html'));
});
app.listen(port);