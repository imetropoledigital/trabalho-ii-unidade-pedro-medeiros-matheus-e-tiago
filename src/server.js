const express = require('express');
const app = express();
const cors = require('cors');
const database = require('./db');

app.use(cors());
app.use(express.json());

database.connect();

app.get('/health', (__, res) => {
    res.status(200).send({
        status: 'OK',
        timestamp: new Date().toISOString()
    })
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});
