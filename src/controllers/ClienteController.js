// Criar endpoints para editar e deletar

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
  },

  async editar(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, telefone } = req.body;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }
      cliente.nome = nome || cliente.nome;
      cliente.email = email || cliente.email;
      cliente.telefone = telefone || cliente.telefone;
      await cliente.save();
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao editar cliente" });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar cliente" });
    }
  }
};
