const { Router } = require('express');
const router = Router();

const { deleteOrder, getOrderById, getOrders,
        saveOrder, updateOrder, getOrder } = require('../controllers/order.controller');

router.post('/create_order', saveOrder);
router.get('/get_orders', getOrders);
router.get('/get_orders/q', getOrder);
router.get('/get_order/:id', getOrderById);
router.put('/update_order/:id', updateOrder);
router.delete('/delete_order/:id', deleteOrder);

module.exports = router;