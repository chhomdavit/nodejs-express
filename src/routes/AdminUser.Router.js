const adminUserController = require("../controllers/AdminUser.Controller");

const adminUser = (app) =>{
    app.get('/api/adminUser/getList',adminUserController.getList);
    app.post('/api/adminUser/create',adminUserController.create);
    app.put('/api/adminUser/update',adminUserController.update);
    app.delete('/api/adminUser/remove/:id',adminUserController.remove);
}

module.exports = adminUser;