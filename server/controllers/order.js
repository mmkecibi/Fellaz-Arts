const db = require('../config/db.js'); 
const passport = require('passport');
const manageproductQuery = require('../models/manageproduct/q');
const manageproductq = manageproductQuery.Categoryquery.getInstance();

const orderquery = require('../models/orders/q');
const orderq = orderquery.Orderquery.getInstance();
let stripe_sk = 'sk_test_51Iyjy5EgszZ86rG6VmmLkSyvBXjjzacqqRytbRajCic8uMjKKMlugRbRroL6PB1rsIbj0LXzpXayziVA0P1QdtVH00rlnMHhTN';


exports.getorderlistbyuserid = async (req, res) => {
    const clientid = req.params.clientid;

    return await orderq.getorderlistbyuserid(clientid)
    .then((result) => {  return res.json(result)})
    .catch(error =>   {return  res.status(422).send(error) })
  }


exports.getTaxeById =  async (req, res, next) => {
        const id = req.params.id;
        return await orderq.getTaxeById(id)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      }

exports.getTaxes = async (req, res) => {
         await orderq.getTaxes()
        .then((result) => {return res.json(result)})
        .catch(error =>   {return  res.status(422).send(error) })
      }      

exports.deleteTaxe = async (req, res) => {
        const id = req.params.id;
         await orderq.deleteTaxe(id)
        .then((result) => {return res.json("true")})
        .catch(error =>   {return  res.status(422).send(error) })
      } 
exports.createTaxe = async (req, res, next) => {
        const taxedata = req.body;
        return await orderq.insertTaxe(taxedata)
        .then((result) => {return res.json("true")})
        .catch(error =>   { return  res.status(422).send(error) })
      };
exports.updateTaxe = async (req, res, next) => {
        const taxedata = req.body;
        return await orderq.insertTaxe(taxedata)
        .then((result) => {return res.json(result)})
        .catch(error =>   { return  res.status(422).send(error) })
      };  




/************************************************************************ */
exports.approuveorder = async (req, res, next) => {
    const orderaprobation = req.body;
  
    return await orderq.approuveorder(orderaprobation)
    .then((result) => {return res.json("true")})
    .catch(error =>   { return  res.status(422).send(error) })
  };
  

  exports.createOrder = async (req, res, next) => {
    const orderdata = req.body;
  
    return await orderq.inserttOrder(orderdata)
    .then((result) => {return res.json("true")})
    .catch(error =>   { return  res.status(422).send(error) })
  };
  exports.createShipping = async (req, res, next) => {
    const shippingata = req.body;
  
    return await orderq.inserttShipping(shippingata)
    .then((result) => {return res.json("true")})
    .catch(error =>   { return  res.status(422).send(error) })
  };
   exports.getclientshipping =  async (req, res, next) => {
    const clientid = req.params.clientid;
    return await orderq.getclientshipping(clientid)
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }

  exports.getUOrderById =  async (req, res, next) => {
    const orderId = req.params.orderId;
    return await orderq.getUOrderById(orderId)
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }
  exports.getUOrderByClientId =  async (req, res, next) => {
    const clientId = req.params.clientId;
    return await orderq.getUOrderByClientId(clientId)
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }
  
  exports.searchbyname =  async (req, res, next) => {
    const name = req.params.name;
    return await orderq.searchbyname(name)
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }
  
  exports.searchbyemail =  async (req, res, next) => {
    const email = req.params.email;
    return await orderq.searchbyemail(email)
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }
  
  exports.searchbyphone =  async (req, res, next) => {
    const phone = req.params.phone;
    return await orderq.searchbyphone(phone)
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }
  
  
  exports.searchcreatedate =  async (req, res, next) => {
    const createat = req.params.createat;
    console.log('createat  ',createat)
    return await orderq.searchcreatedat(createat)
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }
  
  exports.searchordernumber =  async (req, res, next) => {
    const ordernumber = req.params.ordernumber;
    return await orderq.searchordernumber(ordernumber)
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }
  
  
  exports.deletebyproductid =  async (req, res, next) => {
    const clientid = req.params.clientid;
    const productid = req.params.productid;
    return await orderq.deletebyproductid(clientid,productid)
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }
  

  exports.getorderswithitsusers =  async (req, res, next) => {

    return await orderq.getorderswithitsusers()
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }
  
  exports.getorderDetailslistbyorderid =  async (req, res, next) => {
    const orderid = req.params.orderid;
    return await orderq.getorderDetailslistbyorderid(orderid)
    .then((result) => {return res.json(result)})
    .catch(error =>   {   return  res.status(422).send(error) })
  }
  
  exports.getOrderById = async (req, res) => {
    const orderid = req.params.orderid;
    return await orderq.getOrderById(orderid)
    .then((result) => {return res.json(result)})
    .catch(error =>   {return  res.status(422).send(error) })
  }

  exports.createOrderWeb = async (req, res, next) => {
    const orderdata = req.body;

    try {
          
     // var generateSafeId = require('generate-safe-id');
    //  var orderToken = generateSafeId();
console.log('   :  ',orderdata );
      let id_order = await  db.knex('orders')
      .insert({
                  user_id:orderdata.userId,
                  payment_type:orderdata.paymentType,
                  total_amount:orderdata.totalAmount,
                  total_amount_ttx:orderdata.totalAmountttx,
                  order_id:orderdata.order_id,
                  status:'created',
                  payment_status: orderdata.paymentstatus 
                })
                .returning('id') .then(([id]) => { return id }).catch(function (err) { console.log(err); });

        var carts = orderdata.cartItems; //JSON.parse(orderdata.cartItems); 
        carts.forEach(cart => {
                                  db.knex('order_details')
                                                        .insert({
                                                          order_id :id_order,
                                                          product_order_name:cart.name,
                                                          product_order_price:cart.price,
                                                          product_order_discount:cart.discount,
                                                          product_order_quantity:cart.quantity,
                                                          productphotoid:cart.productphotoid,
                                                          size: cart.size,
                                                          weight: cart.weight,
                                                          color_extraprice: cart.color_extraprice,
                                                          product_order_id:cart.id,
                                                                    }) .catch(function (err) {
                                                                        console.log(' err ', err);
                                                                        return err;
                                                                    })  
                                                                              })
       return res.json("true")

          /*  await cartq.deletecart(orderdata.userId)
            .then((result) => {return res.json("true")})
            .catch(error =>   {return  res.status(422).send(error) })*/

    } catch (error) {
      console.log("error", error);
      return   res.json("flase");
    }
  }

exports.makepayment = async (req, res, next) => {
    const orderdata = req.body;
    const stripe = require('stripe')(stripe_sk);
    const { amount, email } = req.body;
  // Should calculate server side
        try {
          
         // var generateSafeId = require('generate-safe-id');
         // var orderToken = generateSafeId();
  console.log('   :  ',orderdata );
          let id_order = await  db.knex('orders')
          .insert({
                      user_id:orderdata.userId,
                      payment_type:orderdata.paymentType,
                      total_amount:orderdata.totalAmount,
                      order_id:orderdata.order_id,
                      status:'created',
                      payment_status:"Cash",
                    })
                    .returning('id') .then(([id]) => { return id }).catch(function (err) { console.log(err); });
  
  
  var carts = JSON.parse(orderdata.cartItems); 
  carts.forEach(cart => {
                                        db.knex('order_details')
                                                              .insert({
                                                                order_id :id_order,
                                                                product_order_name:cart.name,
                                                                product_order_price:cart.price,
                                                                product_order_discount:cart.discount,
                                                                product_order_quantity:cart.quantity,
                                                                productphotoid:cart.productphotoid,
                                                                size: cart.size,
                                                                weight: cart.weight,
                                                                color_extraprice: cart.color_extraprice,
                                                                product_order_id:cart.id,
                                                                          }) .catch(function (err) {
                                                                              console.log(' err ', err);
                                                                              return err;
                                                                          })  
                                                                                    })
    console.log(' orderdata.paymentType : ', orderdata.paymentType);
                  if(orderdata.paymentType == 'Cash on Delivery'){                                                                    
                      await cartq.deletecart(orderdata.userId)
                      .then((result) => {return res.json("true")})
                      .catch(error =>   {return  res.status(422).send(error) })
                  }else
  
                  if(orderdata.paymentType == 'Card'){        
                      
                      const token = await stripe.tokens.create({
                          card: {
                            number: orderdata.cardNumber,
                            exp_month: orderdata.expiryMonth,
                            exp_year: orderdata.expiryYear,
                            cvc: orderdata.cvcNumber,
                          },
                        });
  
                      await  stripe.customers.create({
                          email: orderdata.email
                          });
                          const charge = await stripe.charges.create({
                                amount: orderdata.totalAmount * 100,
                                currency: 'cad',
                                source: token.id,
                                description: 'My First Test Charge (created for API docs)',
                                metadata: {order_id: orderdata.order_id},
                                receipt_email: orderdata.email,
                          }).then(async(charge)  =>  { console.log(' charge => ',charge);
                      
                          await db.knex('orders').where({id: id_order})
                          .update({
                              status:'success',
                              payment_status:charge.id,
                              }).then(() => { return true }).catch(function (err) {
                                  console.log(err);
                              }).catch(function (err) {
                                  console.log(err);
                              }); 
                      
                      }); 
                  
                      await cartq.deletecart(orderdata.userId)
                      .then((result) => {return res.json("true")})
                      .catch(error =>   {return  res.status(422).send(error) })
                  }
  
  
        } catch (error) {
          console.log("error", error);
          return   res.json("flase");
        }
  
  };


  exports.createConfirmCardPayment = async (req, res, next) => {
    const stripe = require('stripe')(stripe_sk);
    const { amount, email } = req.body;
  // Should calculate server side
        try {
    let paymentIntent =   await  stripe.customers.create({
            email: email
          }).then((customer) => {
            return stripe.customers.createSource(customer.id, {
              source: 'tok_visa'
            });
          }).then((source) => {
            return stripe.paymentIntents.create({
              amount:Math.round(amount * 100), // amount in cents; 1600 = 16,00 USD
              currency: 'cad',
            // source: 'tok_mastercard',  // source: 'tok_visa'
              customer: source.customer
            });
          }).then((paymentIntent) => {
            // here enter logic after card was successfully charged
            return paymentIntent;
          }).catch((err) => {
            // here enter logic after card was unsuccessfully charged
            return false
          });
            return res.json({ secret: paymentIntent.client_secret});
        } catch (error) {
          console.log("error", error);
          return  res.status(500).send("error" + error);
        }
};


/********************************     Create-Webhook       **************/
exports.stripewebhook = async (req, res, next) => {
    const stripe = require('stripe')(stripe_sk);
    /***** webhook end point Security  Start get the webhook endpointsecret from the dashboard*/
        let endpointSecret = 'whsec_8XSgiFfgj3lULzCthfFYcxyxeDgOwxe5';
        let sig = req.headers["stripe-signature"];
      let event ;
          try{
            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
            console.log('tag   event   ', event)
          }catch(err){
            console.log('tag   err   ', err)
            res.status(400).send(`Webhook Error: ${err.message}`);
      }
    /***** webhook end point Security  End */
        try {
          console.log('tag   event   ', event)
              switch (event.type) {
                case 'payment_intent.created':{
                  console.log('payment was Created!');
                  res.json({ received: true });
                  break;
                }
              case 'payment_intent.succeeded':{
                const paymentIntent = event.data.object;
                // Then define and call a method to handle the successful payment intent.
                // handlePaymentIntentSucceeded(paymentIntent);
               const email = event['data']['object']['receipt_email'] // contains the email that will recive the recipt for the payment (users email usually)
               console.log('payment was successful!');
               res.json({ received: true });
                break;
              }
              case 'payment_method.attached':
                const paymentMethod = event.data.object;
                res.json({ received: true });
                // Then define and call a method to handle the successful attachment of a PaymentMethod.
                // handlePaymentMethodAttached(paymentMethod);
                break;
              case 'invoice.payment_succeeded':{
                res.json({ received: true });
                break;
              }
              // ... handle other event types
              default:
                console.log(`Unhandled event type ${event.type}`);
                res.status(400).send(`Webhook Error: ${err.message}`);
              }
             
        } catch (err) {
              console.log(err);
            //Return a 200 response to achnowledge receipt of the event
              res.status(400).send(`Webhook Error: ${err.message}`);
          }
  };
  /********************************     Create-Webhook       **************/