const path = require('path');
const validationExtension = (req, res, next) => {
    const extname = req.params.extension;
    if (extname == 'csv' || extname == 'xlsx' || extname == 'xls') {
        next();
    } else {
        res.status(502).json({
            error: true,
            msg: 'non-permitted extension'
          }); 
    }
}

module.exports = {
    validationExtension
}