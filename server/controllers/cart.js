const db = require('../config/db.js'); 
const passport = require('passport');
const manageproductQuery = require('../models/manageproduct/q');
const manageproductq = manageproductQuery.Categoryquery.getInstance();

const cartQuery = require('../models/carts/q');
const cartq = cartQuery.Cartquery.getInstance();


exports.createCart = async (req, res, next) => {
    const proddata = req.body;
  
    return await cartq.createCart(cartdata)
    .then((result) => {return res.json("true")})
    .catch(error =>   { return  res.status(422).send(error) })
  };

exports.addItemToCart = async (req, res, next) => {
          const cartdata = req.body;

          return await cartq.inserttCart(cartdata)
          .then((result) => {return result;})
          .catch(error =>   {return  res.status(422).send(error) })
      };
exports.cartbyclient = async (req, res) => {
        const id = req.params.clientid;
         await cartq.getclientcart(id)
        .then((result) => {return res.json(result)})
        .catch(error =>   {return  res.status(422).send(error) })
      }    

exports.createupdatecart = async (req, res, next) => {
  const cartdata = req.body;

  return await cartq.inserttCart(cartdata)
  .then((result) => { console.log(' result ',result);return result;})
  .catch(error =>   {return  res.status(422).send(error) })
};

exports.addtocart = async (req, res, next) => {
  console.log('cartdat sdvfsdvfsdfsdsdfsd sssd')
};

exports.updateavailibrelatedToCart = async (req, res, next) => {
  const Useravli = req.body;

  return await cartq.updateavailibrelatedToCart(Useravli)
  .then((result) => {return res.json("true")})
  .catch(error =>   {return  res.status(422).send(error) })
};

exports.deletecart = async (req, res) => {
  const clientid = req.params.clientid;

   await cartq.deletecart(clientid)
  .then((result) => {return res.json("true")})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.clientcart = async (req, res) => {
 // const clientid = req.params.clientid;
  console.log('req.params.clientid  ')
//console.log('  req.params.clientid  ', req.params.clientid);
 /* return await cartq.getclientcart(clientid)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })*/
}


exports.cartwithproductphotosbyclient = async (req, res) => {
  const clientid = req.params.clientid;

  return await cartq.getclientcartwithphotos(clientid)
  .then((result) => {  return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

 
exports.getclientcart =  async (req, res, next) => {
  const clientId = req.params.clientId;
  return await cartq.getclientcart(clientId)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}
exports.deletecartbyclientid =  async (req, res, next) => {
  const clientid = req.params.clientid;
  return await cartq.deletecart(clientid)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}
exports.updatebyproductid =  async (req, res, next) => {
  const clientid = req.params.clientid;
  const productid = req.params.productid;
  const quantity = req.params.quantity;
  return await cartq.updatebyproductid(clientid,productid,quantity)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}
exports.getcartItembyproductid =  async (req, res, next) => {
  const clientid = req.params.clientid;
  const productid = req.params.productid;
  return await cartq.getcartItembyproductid(clientid,productid)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}