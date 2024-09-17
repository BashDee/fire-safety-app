const express = require('express');
const { applyCertificate, generateQRCode } = require('../controllers/certificateController');
const router = express.Router();

router.post('/apply', applyCertificate);
router.get('/generate_qrcode/:certificateId', generateQRCode);

module.exports = router;
