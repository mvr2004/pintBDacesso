const sql = require('mssql');

// Configuração do SQL Server
const dbConfig = {
    user: 'seu_usuario',
    password: 'sua_senha',
    server: 'seu_servidor',
    database: 'sua_base_de_dados',
    options: {
        encrypt: true, // Se você estiver usando Azure
        enableArithAbort: true
    }
};

sql.connect(config).catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
});

module.exports = sql;
