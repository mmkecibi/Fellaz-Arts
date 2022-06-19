const express = require('express');
const router = express.Router();

const CartsCtrl = require('../controllers/cart');

router.get('/clientcart/:clientid',  CartsCtrl.clientcart);
router.get('/cartwithproductphotosbyclient/:clientid', CartsCtrl.cartwithproductphotosbyclient);  
router.get('/deletecartbyclientid/:clientid',  CartsCtrl.deletecartbyclientid); 
router.get('/updatebyproductid/:clientid/:productid/:quantity',  CartsCtrl.updatebyproductid); 
router.get('/getcartItembyproductid/:clientid/:productid',  CartsCtrl.getcartItembyproductid);   
router.get('/deletecart/:clientid',  CartsCtrl.deletecart);
router.get('/cartbyclient/:clientid',  CartsCtrl.cartbyclient); 

router.post('/createupdatecart', CartsCtrl.createupdatecart);
router.post('/addItemToCart', CartsCtrl.addItemToCart);
router.patch('/updateavailibrelatedToCart', CartsCtrl.updateavailibrelatedToCart);

module.exports = router;