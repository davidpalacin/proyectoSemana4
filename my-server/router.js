const router = require("express").Router();
const indexRouter = require("./routes/index");
const clienteRoute = require("./routes/clientes");

router.use("/", indexRouter);
router.use("/clients", clienteRoute);

module.exports = router;
