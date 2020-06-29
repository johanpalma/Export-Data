const {  Router } = require('express');
const router = Router();
const { saveCarrier, getCarriers, getCarrierById,
        deleteCarrier, updateCarrier, getCarrier } = require('../controllers/carrier.controller');

router.post('/create_carrier', saveCarrier);
router.get('/get_carriers', getCarriers);
router.get('/get_carriers/q', getCarrier);
router.get('/get_carrier/:id', getCarrierById);
router.delete('/delete_carrier/:id', deleteCarrier);
router.put('/update_carrier/:id', updateCarrier);

module.exports = router;