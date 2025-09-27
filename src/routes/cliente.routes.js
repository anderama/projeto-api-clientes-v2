const express = require("express");
const ClienteController = require("../controllers/ClienteController");

const router = express.Router();

router.get("/clientes", ClienteController.listar);
router.post("/clientes", ClienteController.cadastrar);
router.put("/clientes/:id", ClienteController.editar);
router.delete("/clientes/:id", ClienteController.deletar);

module.exports = router;
