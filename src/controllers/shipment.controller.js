const url = require('url');
const queryString = require('querystring');
const json2xls = require('json2xls');
const fs = require('fs');
const path = require('path');
const ShipmentModel = require('../models/shipment.model');
const initDrive = require('../driveConfig/index');

function saveShipment(req, res) {
    const shipment = new ShipmentModel(req.body);

    shipment.save((err, ShipmentStored) => {
        if (err) { 
            return res.status(500).json({
                message: 'shipment no save'
            }); 
        } else {
            return res.status(200).json({
                message: ShipmentStored
            });
        }
    })
}

function getShipments(req, res) {
    ShipmentModel.find((err, shipmentData) => {
      if (err) return res.status(500).json({ message: 'Error in get to data' });

      return res.json({shipmentData});
    })
}

function getShipmentById(req, res) {
    const { id } = req.params;
    ShipmentModel.findById(id, (err, shipmentData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });

        return res.json({ shipmentData });
    })
}

function getShipment(req, res) {
    let parsedUrl = url.parse(req.url)
    let parsedQs = queryString.parse(parsedUrl.query);

    ShipmentModel.find(parsedQs, (err, shipmentData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data', err });

        return res.json({ shipmentData });
    })
}

function deleteShipment(req, res) {
    const { id } = req.params;
    ShipmentModel.find({'_id': id}).remove(err => {
        if (err) return res.status(500).json({error: 'data no delete'});

        return res.json({data: 'data delete'});
    })
}

function updateShipment(req, res) {
    const { id } = req.params;
    const dataUpdate = req.body;
    ShipmentModel.findByIdAndUpdate(id, dataUpdate, {new: true}, (err, shipmentUpdated) => {
        if(err) return res.status(500).json({ error: 'Error in the request' });

        if (!shipmentUpdated) return res.status(500).json({ message: 'Shipment no updated' });

        res.status(200).json({ shipmentUpdated });
    })
}

async function exportShipment(req, res, next) {
    const jsonArray = [];
    const { extension } = req.params;
    console.log(extension)
    let uploadPath;
    await ShipmentModel.find((err, shipmentData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });
  
        // shipmentData.forEach(function(instance, index,record){
            shipmentData.map(data =>{ 
                
                var tempArry = {
                    'CARRIER ID' : data['carrier_id'],
                    'DATE' : data['date'],
                    'ORIIGN COUNTRY' : data['origin_country'],
                    'ORIGIN ORIGIN CITY' : data['origin_city'],
                    'DESTINATION COUNTRY' : data['origin_country'],
                    'DESTINATION STATE' : data['destination_state'],
                    'DESTINATION CITY' : data['destination_city'],
                    'PICKUP DATE' : data['pickup_date'],
                    'STATUS' : data['status'],
                    'CARRIER RATE' : data['carrier_rate']
        
                }
                jsonArray.push(tempArry);
            })
        // });
    //this code is for sorting  xls with required value

      });

    var xls = json2xls(jsonArray);

    uploadPath = path.join(__dirname, '../uploads', `${format(new Date(), 'yyyy-MM-dd-hh-mm')}.${extension}`);


    fs.writeFileSync(uploadPath, xls, 'binary');

    initDrive(uploadPath);
    
    res.download(uploadPath);
}

const format = function date2str(x, y) {
    var z = {
        M: x.getMonth() + 1,
        d: x.getDate(),
        h: x.getHours(),
        m: x.getMinutes(),
        s: x.getSeconds()
    };
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
        return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
    });

    return y.replace(/(y+)/g, function(v) {
        return x.getFullYear().toString().slice(-v.length)
    });
}

module.exports = {
    saveShipment,
    getShipments,
    getShipment,
    getShipmentById,
    deleteShipment,
    updateShipment,
    exportShipment
}