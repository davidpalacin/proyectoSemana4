var express = require("express");
var router = express.Router();
const ReservaController = require("../controllers/reserva_controller");

/* GET users listing. */
router.get("/", ReservaController.findAll);

// Get users by id
router.get("/:id", ReservaController.findByPk);
// Por fecha de entrada y de salida
router.get("/entrydate/:entrydate", ReservaController.findByEntryDate);
router.get("/finaldate/:finaldate", ReservaController.findByFinalDate);
// Por fechas pero con id concreto
router.get(
  "/id/:id/entrydate/:entrydate",
  ReservaController.findByEntryDateWithPk
);


module.exports = router;
