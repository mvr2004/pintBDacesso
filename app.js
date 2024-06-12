// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('./db');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Exemplo de rota para obter todos os usuários
app.get('/users', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM TP_UTILIZADORES`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
