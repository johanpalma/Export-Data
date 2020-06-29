const { model, Schema } = require('mongoose');

const ShipmentSchema = new Schema({
    carrier_id: Number,
    date: Date,
    origin_country: String,
    origin_state: String,
    origin_city: String,
    destination_country: String,
    destination_state: String,
    destination_city: String,
    pickup_date: Date,
    delivery_date: Date,
    status: String,
    carrier_rate: Number,
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Shipment', ShipmentSchema);