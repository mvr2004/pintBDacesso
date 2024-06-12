const express = require('express');
const sql = require('mssql');

const app = express();
const port = 3000;

// Configuração do SQL Server
const dbConfig = {
    user: 'seu_usuario',
    password: 'sua_senha',
    server: 'seu_servidor',
    database: 'sua_base_de_dados',
    options: {
        encrypt: true, // Use este campo se você estiver utilizando o Azure
        trustServerCertificate: true, // Use este campo se você estiver utilizando um SQL Server local
    }
};

sql.connect(dbConfig).then(pool => {
    if (pool.connected) {
        console.log('Conectado ao SQL Server');
    }

    app.get('/dados', async (req, res) => {
        try {
            const result = await pool.request().query('SELECT * FROM sua_tabela');
            res.json(result.recordset);
        } catch (err) {
            res.status(500).send(err.message);
        }
    });

}).catch(err => {
    console.log('Erro ao conectar ao SQL Server:', err);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
