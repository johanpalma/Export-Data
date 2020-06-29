const url = require('url');
const queryString = require('querystring');
const CarrierModel = require('../models/carrier.model');

function saveCarrier(req, res) {
    const carrier = new CarrierModel(req.body);

    carrier.save((err, CarrierStored) => {
        if (err) { 
            return res.status(500).json({
                message: 'Carrier no save'
            }); 
        } else {
            return res.status(200).json({
                message: CarrierStored
            });
        }
    })
}

function getCarriers(req, res) {
    CarrierModel.find((err, carriersData) => {
      if (err) return res.status(500).json({ message: 'Error in get to data' });

      return res.json({carriersData});
    })
}

function getCarrierById(req, res) {
    const { id } = req.params;
    CarrierModel.findById(id, (err, carrierData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });

        return res.json({ carrierData });
    })
}

function getCarrier(req, res) {
    let parsedUrl = url.parse(req.url)
    let parsedQs = queryString.parse(parsedUrl.query);

    CarrierModel.find(parsedQs, (err, carrierData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data', err });

        return res.json({ carrierData });
    })
}

function deleteCarrier(req, res) {
    const { id } = req.params;
    CarrierModel.find({'_id': id}).remove(err => {
        if (err) return res.status(500).json({error: 'data no delete'});

        return res.json({data: 'data delete'});
    })
}

function updateCarrier(req, res) {
    const { id } = req.params;
    const dataUpdate = req.body;
    CarrierModel.findByIdAndUpdate(id, dataUpdate, {new: true}, (err, carrierUpdated) => {
        if(err) return res.status(500).json({ error: 'Error in the request' });

        if (!carrierUpdated) return res.status(500).json({ message: 'Carrier no updated' });

        res.status(200).json({ carrierUpdated });
    })
}

module.exports = {
    saveCarrier,
    getCarriers,
    getCarrier,
    getCarrierById,
    deleteCarrier,
    updateCarrier
}