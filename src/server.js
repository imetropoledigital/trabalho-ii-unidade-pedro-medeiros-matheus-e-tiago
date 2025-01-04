const express = require("express");
const cors = require("cors");
const app = express();

const routes = require("./routes");
const database = require("./db");

app.use(cors());
app.use(express.json());

database
  .connect()
  .then(() => console.info("Conexão com o mongodb estabelecida!"))
  .catch((error) =>
    console.error("Erro ao tentar estabelecer conexão com o mongodb: ", error)
  );

app.use("/", routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});
