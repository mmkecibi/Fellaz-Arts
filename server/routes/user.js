const express = require('express');
const router = express.Router();

const UsersCtrl = require('../controllers/user');
const AuthCtrl = require('../controllers/auth');


router.get('/setlanginsession/:lang',  UsersCtrl.setlanginsession);

router.get('/ttall',  UsersCtrl.getAllUser);
router.get('/me',  UsersCtrl.getCurrentUser);
router.post('/cart/createConfirmCardPayment', UsersCtrl.createConfirmCardPayment);
router.post('/cart/make-payment', UsersCtrl.makepayment);
router.post('/cart/stripewebhook', UsersCtrl.stripewebhook);
router.post('/cart/approuveorder', UsersCtrl.approuveorder);
router.post('/cart/createupdatecart', UsersCtrl.createupdatecart);
router.post('/cart/createOrder', UsersCtrl.createOrder);
router.post('/cart/createShipping', UsersCtrl.createShipping);
router.post('/createclientevents', UsersCtrl.createclientevents)
router.patch('/cart/updateavailibrelatedToCart', UsersCtrl.updateavailibrelatedToCart);
router.patch('/updateuserinfo', UsersCtrl.updateUserinfo)


router.get('/getuserbyemail/:email',  UsersCtrl.getuserbyemail);   
router.get('/getuserwithphotosById/:id',  UsersCtrl.getUserwithphotosById);          
router.get('/cart/clientcart/:clientid',  UsersCtrl.clientcart); 
router.get('/cart/getclientshipping/:clientid',  UsersCtrl.getclientshipping); 
router.get('/cart/deletecartbyclientid/:clientid',  UsersCtrl.deletecartbyclientid); 
router.get('/cart/getUOrderById/:clientid',  UsersCtrl.getUOrderById); 
router.get('/cart/getUOrderByClientId/:clientid',  UsersCtrl.getUOrderByClientId); 
router.get('/cart/deletebyproductid/:clientid/:productid',  UsersCtrl.deletebyproductid); 
router.get('/cart/updatebyproductid/:clientid/:productid/:quantity',  UsersCtrl.updatebyproductid); 
router.get('/cart/getcartItembyproductid/:clientid/:productid',  UsersCtrl.getcartItembyproductid); 

router.get('/cart/searchbyname/:name',  UsersCtrl.searchbyname);
router.get('/cart/searchbyemail/:email',  UsersCtrl.searchbyemail);
router.get('/cart/searchbyphone/:phone',  UsersCtrl.searchbyphone);
router.get('/cart/searchordernumber/:ordernumber',  UsersCtrl.searchordernumber);
router.get('/cart/searchcreatedate/:createat',  UsersCtrl.searchcreatedate);

router.get('/searchclientbyname/:name',  UsersCtrl.searchclientbyname);
router.get('/searchclientbyemail/:email',  UsersCtrl.searchclientbyemail);
router.get('/searchclientbyphone/:phone',  UsersCtrl.searchclientbyphone);


router.get('/cart/getOrderById/:orderid',  UsersCtrl.getOrderById);
router.get('/cart/getorderDetailslistbyorderid/:orderid',  UsersCtrl.getorderDetailslistbyorderid);
router.get('/cart/getorderswithitsusers',  UsersCtrl.getorderswithitsusers);

router.get('/cart/get-order-list-by-user-id/:clientid',  UsersCtrl.getorderlistbyuserid);     
router.get('/cart/clientcartwithphotos/:clientid',  UsersCtrl.clientcartwithphotos);     
router.get('/cart/deletecart/:clientid',  UsersCtrl.deletecart);
router.get('/users/zipcoderadusfinder/:radious/:distance/:latitude/:longitude',  UsersCtrl.zipcoderadusfinder);
router.post('/users/Usersavailabilitiesfinder',  UsersCtrl.Usersavailabilitiesfinder);
router.post('/users/UseravailibilitieszipcoderadusfinderAllIds',  UsersCtrl.UseravailibilitieszipcoderadusfinderAllIds);
router.post('/users/Useravailibilitieszipcoderadusfinder',  UsersCtrl.Useravailibilitieszipcoderadusfinder);
router.get('/users/allUsersbytype/:usertypecode',  UsersCtrl.getAllUserTypeByType);
router.get('/userclientbyusername/:username',  UsersCtrl.getUserClientByUserName);
router.get('/userclientbyuseremail/:email', UsersCtrl.getUserClientByEmail);
router.get('/getUserEvents/:user_id', UsersCtrl.getUserEvents);

router.get('/getAllUsers', UsersCtrl.getAllUsers);

router.post('/getUsersByPageIds', UsersCtrl.getUsersByPageIds);
router.post('/getUsersByPage', UsersCtrl.getUsersByPage);

router.get('/getUserById/:userId', UsersCtrl.getUserById);

router.get('/users/:id',   UsersCtrl.getUserById);
router.post('/register', UsersCtrl.register)
router.post('/login', UsersCtrl.login)
router.post('/logout',   UsersCtrl.logout)


module.exports = router;