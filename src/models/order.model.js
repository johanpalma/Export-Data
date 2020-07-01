const { model, Schema } = require('mongoose');

const OrderSchema = new Schema({
    carrier_id: { type: Schema.Types.ObjectId, ref: 'Carrier' },
    provider: String,
    address: String,
    phone: String,
    description_order: String,
    quantity: Number,
    unit_price: Number, // product price excluding tax
    total_price: Number, //price with tax
    delivery_date: Date,
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Order', OrderSchema);