const express = require('express');
const router = express.Router();

const OrdersCtrl = require('../controllers/order');

router.get('/getclientshipping/:clientid',  OrdersCtrl.getclientshipping); 
router.get('/getUOrderById/:clientid',  OrdersCtrl.getUOrderById); 
router.get('/getUOrderByClientId/:clientid',  OrdersCtrl.getUOrderByClientId); 
router.get('/searchbyname/:name',  OrdersCtrl.searchbyname);
router.get('/searchbyemail/:email',  OrdersCtrl.searchbyemail);
router.get('/searchbyphone/:phone',  OrdersCtrl.searchbyphone);
router.get('/searchordernumber/:ordernumber',  OrdersCtrl.searchordernumber);
router.get('/searchcreatedate/:createat',  OrdersCtrl.searchcreatedate);
router.get('/getOrderById/:orderid',  OrdersCtrl.getOrderById);
router.get('/getorderDetailslistbyorderid/:orderid',  OrdersCtrl.getorderDetailslistbyorderid);
router.get('/getorderswithitsusers',  OrdersCtrl.getorderswithitsusers);
router.get('/get-order-list-by-user-id/:clientid',  OrdersCtrl.getorderlistbyuserid);   
router.get('/getTaxes',  OrdersCtrl.getTaxes);
router.get('/getTaxeById/:id',  OrdersCtrl.getTaxeById);
router.get('/getTaxeByProvince/:shippingprovince',  OrdersCtrl.getTaxeByProvince);

router.get('/deleteTaxe/:id',  OrdersCtrl.deleteTaxe);

router.post('/createConfirmCardPayment', OrdersCtrl.createConfirmCardPayment);
router.post('/make-payment', OrdersCtrl.makepayment);
router.post('/stripewebhook', OrdersCtrl.stripewebhook);
router.post('/approuveorder', OrdersCtrl.approuveorder);
router.post('/createOrder', OrdersCtrl.createOrder);
router.post('/createShipping', OrdersCtrl.createShipping);

router.post('/createTaxe', OrdersCtrl.createTaxe);
router.post('/updateTaxe', OrdersCtrl.updateTaxe);
router.post('/createOrderWeb', OrdersCtrl.createOrderWeb);



module.exports = router;