const mongoose = require('mongoose');

const DATABASE_URI = 'mongodb://localhost:27017/test';

const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URI)
        console.info("Conexão com o mongodb estabelecida!")
    } catch (error) {
        console.error("Erro ao tentar estabelecer conexão: ", error)
    }
}


module.exports = {
    connect
}