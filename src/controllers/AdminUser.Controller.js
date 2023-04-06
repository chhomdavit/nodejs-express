const db = require("../config/db.config");

const getList = (req,res)=>{
    var sqlSelect = "SELECT * FROM tbl_adminuser"
    db.query(sqlSelect,(error,results)=>{
        res.json({
            data_adminUser: results
        })
    })
}

const create = (req,res)=>{
    var body = req.body
    var sqlInsert = "INSERT INTO tbl_adminuser (firstname,lastname,email,password,active) VALUES (?,?,?,?,?)";
    
    db.query(sqlInsert,[body.firstname,body.lastname,body.email,body.password, body.active],(error,results)=>{
        if(error){
            res.json({
                error: true,
                message: error
            })
        }else{
            res.json({
                message: "admin user insterted",
                data_adminUser: results
            })
        }
    })
}

const update = (req,res)=>{
    var body = req.body
    var sqlUpdate = "UPDATE tbl_adminuser SET firstname=?,lastname=?,email=?,password=?,active=? WHERE adminUser_id=?";
    
    db.query(sqlUpdate,[body.firstname,body.lastname,body.email,body.password, body.active,body.adminUser_id],(error,results)=>{
        if(error){
            res.json({
                error: true,
                message: error
            })
        }else{
            res.json({
                message: "admin user update",
                data_adminUser: results
            })
        }
    })
}

const remove = (req,res)=>{
    var sqlDelete = "DELETE FROM tbl_adminuser WHERE adminUser_id="+ req.params.id
    db.query(sqlDelete,(error,results)=>{
        if(error){
            res.json({
                error: true,
                message: error
            })
        }else{
            if(results.affectedRows !=0){
                res.json({
                    message: "admin user remove",
                    data_adminUser: results
                })
            }else{
                res.json({
                    message: "Delete not complete",
                    data_adminUser: results
                })
            }
        }
    })
}

module.exports = {
    getList,
    create,
    update,
    remove,
}