const { model, Schema } = require('mongoose');

const CarrierSchema = new Schema({
    name: String,
    scac: String,
    mc: Number,
    dot: Number,
    fein: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Carrier', CarrierSchema);