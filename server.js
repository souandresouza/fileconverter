const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Rota para upload e conversão de arquivos
app.post('/convert', upload.single('file'), (req, res) => {
    const file = req.file;
    const format = req.body.format;

    // Lógica de conversão de arquivos (a ser implementada)
    // Exemplo: converter para o formato desejado

    res.send(`Arquivo ${file.originalname} recebido para conversão para ${format}.`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});