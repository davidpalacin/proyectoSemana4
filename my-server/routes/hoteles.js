var express = require("express");
var router = express.Router();
const HotelController = require("../controllers/hotel_controller");

/* GET users listing. */
router.get("/", HotelController.findAll);

// Get users by id
router.get("/:id", HotelController.findByPk);
router.get("/name/:nombre", HotelController.findByName);
router.get("/price/:price", HotelController.findByPrice);

module.exports = router;
