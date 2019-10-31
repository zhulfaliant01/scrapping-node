var express = require('express');
var router = express.Router();

const mamikosController = require("../controllers/mamikosController")

/* GET home page. */
router.get('/', function (req, res, next) {
  mamikosController.getAllList(req, res, next)
});

module.exports = router;
