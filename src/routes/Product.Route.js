const productController = require("../controllers/Product.Controller");

const product = (app) =>{
    app.get('/api/product/getList',productController.getList);
    app.post('/api/product/create',productController.create);
    app.put('/api/product/update',productController.update);
    app.delete('/api/product/remove/:id',productController.remove);
}

module.exports = product;