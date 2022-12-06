const router = require("express").Router();
const indexRouter = require("./routes/index");
const clienteRoute = require("./routes/clientes");
const hotelRoute = require("./routes/hoteles");
const reservRoute = require("./routes/reservas");

router.use("/", indexRouter);
router.use("/clients", clienteRoute);
router.use("/hotels", hotelRoute);
router.use("/reserv", reservRoute);

module.exports = router;
