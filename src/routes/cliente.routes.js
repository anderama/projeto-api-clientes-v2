const express = require("express");
const ClienteController = require("../controllers/ClienteController");

const router = express.Router();

router.get("/clientes", ClienteController.listar);
router.post("/clientes", ClienteController.cadastrar);

module.exports = router;
