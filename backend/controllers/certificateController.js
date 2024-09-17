const { createCertificate, findCertificateById } = require('../models/certificateModel');
const qrcode = require('qrcode');

const applyCertificate = async (req, res) => {
  const { userId, buildingName, location, fireSafetyMeasures } = req.body;
  const certificate = await createCertificate(userId, buildingName, location, fireSafetyMeasures);
  res.status(201).json(certificate);
};

const generateQRCode = async (req, res) => {
  const { certificateId } = req.params;
  const certificate = await findCertificateById(certificateId);

  if (!certificate) return res.status(404).json({ message: 'Certificate not found' });

  const qrData = JSON.stringify({
    id: certificate.id,
    buildingName: certificate.building_name,
    status: certificate.status,
  });

  qrcode.toDataURL(qrData, (err, url) => {
    if (err) return res.status(500).json({ message: 'Error generating QR code' });
    res.json({ qrCodeUrl: url });
  });
};

module.exports = {
  applyCertificate,
  generateQRCode,
};
