# Demo

Programming language, Architecture, implementation, performance

* this project is connected to google drive services and allows to upload an excel file, the project also sends an email notification when the excel file is uploaded 

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install npm.

```bash
npm install 
```

## Execute project

```start
npm run dev
```

## Usage carrier crud

```javascript
router.post('/create_carrier', saveCarrier);
router.get('/get_carriers', getCarriers);
router.get('/get_carriers/q', getCarrier);
router.get('/get_carrier/:id', getCarrierById);
router.delete('/delete_carrier/:id', deleteCarrier);
router.put('/update_carrier/:id', updateCarrier);
```
## Example

* Register:
URL:
http://localhost:4000/demo/create_carrier

Body:
```json
{
    "name": "",
    "scac": "",
    "mc": "",
    "dot": "",
    "fein": ""
}
```

* Get carriers:
http://localhost:4000/demo/get_carriers


* Get carrier:
http://localhost:4000/demo/get_carrier/5ef8bc771e12b73d04c38226

Params:
carrier_id

* Get carriers:
http://localhost:4000/demo/get_carriers/q?name=R%26L CARRIERS&scac=RNLO

Params:
receives any parameter

* delete carrier:
http://localhost:4000/demo/delete_carrier/5ef8bc771e12b73d04c38226

Params:
carrier_id

* update carrier:
http://localhost:4000/demo/update_carrier/5ef8bc771e12b73d04c38226

Params:
carrier_id

Body:
```json
{
    "name": "",
    "scac": "",
    "mc": "",
    "dot": "",
    "fein": ""
}
```

## Usage shipment crud

```javascript
router.post('/create_shipment', saveShipment);
router.get('/get_shipments', getShipments);
router.get('/get_shipments/q', getShipment);
router.get('/get_shipment/:id', getShipmentById);
router.get('/export_shipment', exportShipment);
router.put('/update_shipment/:id', updateShipment);
router.delete('/delete_shipment/:id', deleteShipment);
```
## Example

* Register:
URL:
http://localhost:4000/demo/create_shipment

Body:
```json
{
    "origin_country": "USA",
    "origin_state": "FL",
    "origin_city": "Davie",
    "destination_country": "USA",
    "destination_state": "MI",
    "destination_city": "Holland",
    "pickup_date": "2020-03-18T00:42:48.000Z",
    "delivery_date": "1970-01-01T00:00:00.000Z",
    "status": "Delivered",
    "carrier_rate": "1155"
}
```

* Export file excel:
URL:
http://localhost:4000/demo/export_shipment/xlsx

Params:
* this path works under the get resive method the extension of the file to be generated these extensions can be csv, xlsx and xls and are validated by a middleware 


* Get shipment:
http://localhost:4000/demo/get_shipments


* Get shipment:
http://localhost:4000/demo/get_shipment/5ef8bc771e12b73d04c38226

Params:
shipment_id

* Get shipment:
http://localhost:4000/demo/get_shipments/q?provider=Falabella&address=CHINA

Params:
receives any parameter

* delete shipment:
http://localhost:4000/demo/delete_shipment/5ef8bc771e12b73d04c38226

Params:
shipment_id

* update shipment:
http://localhost:4000/demo/update_shipment/5ef8bc771e12b73d04c38226

Params:
shipment_id

Body:
```json
{
    "origin_country": "USA",
    "origin_state": "FL",
    "origin_city": "Davie",
    "destination_country": "USA",
    "destination_state": "MI",
    "destination_city": "Holland",
    "pickup_date": "2020-03-18T00:42:48.000Z",
    "delivery_date": "1970-01-01T00:00:00.000Z",
    "status": "Delivered",
    "carrier_rate": "1155"
}
```

## Usage order crud

```javascript
router.post('/create_order', saveOrder);
router.get('/get_orders', getOrders);
router.get('/get_orders/q', getOrder);
router.get('/get_order/:id', getOrderById);
router.put('/update_order/:id', updateOrder);
router.delete('/delete_order/:id', deleteOrder);
```
## Example

* Register:
URL:
http://localhost:4000/demo/create_order

Body:
```json
{
    "provider": "libre mercado",
    "address": "CHINA",
    "phone": "322293733",
    "description_order": "mesa de cosina",
    "quantity": 1,
    "unit_price": 1500000,
    "total_price": 2000000,
    "delivery_date": "06/30/2020",
    "carrier_id": "5efa0bf59c1d6a370c931acc"
}
```

* Get shipment:
http://localhost:4000/demo/get_orders


* Get shipment:
http://localhost:4000/demo/get_order/5ef8bc771e12b73d04c38226

Params:
order_id

* Get shipment:
http://localhost:4000/demo/get_orders/q?provider=Falabella&address=CHINA

Params:
receives any parameter

* delete shipment:
http://localhost:4000/demo/delete_order/5ef8bc771e12b73d04c38226

Params:
order_id

* update shipment:
http://localhost:4000/demo/update_order/5ef8bc771e12b73d04c38226

Params:
order_id

Body:
```json
{
    "provider": "libre mercado",
    "address": "CHINA",
    "phone": "322293733",
    "description_order": "mesa de cosina",
    "quantity": 1,
    "unit_price": 1500000,
    "total_price": 2000000,
    "delivery_date": "06/30/2020",
    "carrier_id": "5efa0bf59c1d6a370c931acc"
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)