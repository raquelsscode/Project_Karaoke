// server.js

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configuração do banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reproductor_videos'
});

connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conectado ao banco de dados!');
  }
});

// Rota para salvar um novo vídeo
app.post('/videos', (req, res) => {
  // Implemente a lógica para salvar o vídeo no banco de dados
  // ...
});

// Rota para obter todos os vídeos
app.get('/videos', (req, res) => {
  // Implemente a lógica para obter os vídeos do banco de dados
  // ...
});

// Rota para a raiz do servidor
app.use(express.static('public'));

// Iniciar o servidor
app.listen(port, () => {
  console.log('Servidor rodando em http://localhost:' + port);
});

