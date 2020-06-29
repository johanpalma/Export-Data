const url = require('url');
const queryString = require('querystring');
const OrderModel = require('../models/order.model');

function saveOrder(req, res) {
    const order = new OrderModel(req.body);

    order.save((err, OrderStored) => {
        if (err) { 
            return res.status(500).json({
                message: 'Order no save'
            }); 
        } else {
            return res.status(200).json({
                message: OrderStored
            });
        }
    })
}

function getOrders(req, res) {
    OrderModel.find((err, ordersData) => {
      if (err) return res.status(500).json({ message: 'Error in get to data' });

      return res.json({ordersData});
    })
}

function getOrderById(req, res) {
    const { id } = req.params;
    OrderModel.findById(id, (err, orderData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });

        return res.json({ orderData });
    })
}

function getOrder(req, res) {
    let parsedUrl = url.parse(req.url)
    let parsedQs = queryString.parse(parsedUrl.query);

    OrderModel.find(parsedQs, (err, orderData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data', err });

        return res.json({ orderData });
    })
}

function deleteOrder(req, res) {
    const { id } = req.params;
    OrderModel.find({'_id': id}).remove(err => {
        if (err) return res.status(500).json({error: 'data no delete'});

        return res.json({data: 'data delete'});
    })
}

function updateOrder(req, res) {
    const { id } = req.params;
    const dataUpdate = req.body;
    OrderModel.findByIdAndUpdate(id, dataUpdate, {new: true}, (err, orderUpdated) => {
        if(err) return res.status(500).json({ error: 'Error in the request' });

        if (!orderUpdated) return res.status(500).json({ message: 'Order no updated' });

        res.status(200).json({ orderUpdated });
    })
}

module.exports = {
    saveOrder,
    getOrders,
    getOrder,
    getOrderById,
    deleteOrder,
    updateOrder,
}