const express = require('express');
const { getFirmen, getFirmenJson } = require('../controllers/firmen');

const router = express.Router();

router.get('/firmen', getFirmen);
router.get('/firmenJson', getFirmenJson);

module.exports = router;
