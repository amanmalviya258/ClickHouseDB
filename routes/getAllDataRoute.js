const express = require('express');
const router = express.Router();

const { getClickHouseData } = require('../controller/getClickHouseData');
const { getClickHouseSchemas } = require('../controller/getClickHouseSchemas');


router.get('/getTables', getClickHouseData);
router.get('/getSchemas', getClickHouseSchemas);


module.exports = router;
