const { Router } = require('express');
const router = Router();

const { validationExtension } = require('../middleware/validation')

const { deleteShipment, getShipments, getShipmentById,
        saveShipment, updateShipment, getShipment, exportShipment } = require('../controllers/shipment.controller');

router.post('/create_shipment', saveShipment);
router.get('/get_shipments', getShipments);
router.get('/get_shipments/q', getShipment);
router.get('/get_shipment/:id', getShipmentById);
router.get('/export_shipment/:extension', validationExtension, exportShipment);
router.put('/update_shipment/:id', updateShipment);
router.delete('/delete_shipment/:id', deleteShipment);

module.exports = router;