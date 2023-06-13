const express = require('express');
const router = express.Router();
const controller = require('../controller/usercontroller');


router.get("/",controller.resister)

module.exports = router;