const Cliente = require("../models/Cliente");

module.exports = {
  async listar(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.json(clientes);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar clientes" });
    }
  },

  async cadastrar(req, res) {
    try {
      const { nome, email, telefone } = req.body;
      const cliente = await Cliente.create({ nome, email, telefone });
      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao cadastrar cliente" });
    }
  }
};
