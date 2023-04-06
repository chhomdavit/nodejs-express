const { query } = require("../config/db.config");
const db = require("../config/db.config");

const getList = (req,res) =>{
    db.query("SELECT * FROM tbl_products",(error,results)=>{
        res.json({
            data_product : results
        })
    })
}

const create = (req,res) =>{
    var body = req.body
    var sqlInsert = "INSERT INTO tbl_products (image, title, information, is_active) VALUES (?,?,?,?)";

    db.query(sqlInsert,[body.image,body.title,body.information,body.is_active],(error,results)=>{
        if(error){
            res.json({
                error: true,
                message: error
            })
        }else{
            res.json({
              message: "product insterted!",
              data_product: results
            })
        }
    })
}

const update = (req,res)=>{
    var body = req.body
    var sqlUpdate = "UPDATE tbl_products SET image=?, title=?, information=?, is_active=? WHERE product_id=?";
    
    db.query(sqlUpdate,[body.image,body.title,body.information,body.is_active,body.product_id],(error,results)=>{
        if(error){
            res.json({
                error: true,
                message: error
            })
        }else{
            res.json({
                message: "Product have been Updated!",
                data_product: results
            })
        }
    })
}
const remove = (req,res)=>{
   db.query("DELETE FROM tbl_products WHERE product_id="+ req.params.id,(error,results)=>{
    if(error){
        res.json({
            error: true,
            message: error
        })
    }else{
        if(results.affectedRows !=0){
            res.json({
                message: "Product Deleted!",
                data_product : results
            })
        }else{
            res.json({
                message: "Delete not complete",
                data_product: results
            })
        }
    }
   })
}
module.exports ={
    getList,
    create,
    update,
    remove,
}