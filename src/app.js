const express = require("express");
const sequelize = require("./database");
const Cliente = require("./models/Cliente"); // importa para sincronizar
const clienteRoutes = require("./routes/cliente.routes");

const app = express();

app.use(express.json());
app.use(clienteRoutes);

sequelize.sync(); // cria tabelas se não existirem

module.exports = app;
