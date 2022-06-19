const db = require('../config/db.js'); 
const passport = require('passport');
const userQuery = require('../models/users/q');
const userq = userQuery.Userquery.getInstance();

const cartQuery = require('../models/carts/q');
const cartq = cartQuery.Cartquery.getInstance();
let stripe_sk = 'sk_test_51Iyjy5EgszZ86rG6VmmLkSyvBXjjzacqqRytbRajCic8uMjKKMlugRbRroL6PB1rsIbj0LXzpXayziVA0P1QdtVH00rlnMHhTN';

exports.getAllUser = async function (req, res, next) {

  let id_user = await  db.knex('users')
                                      .insert({
                                                    lastname: 'firstName',
                                                    firstname: 'lastName',
                                                    username:'username',
                                                    password: 'email'
                                                })
                                                .returning('id')
                                                .then(([id]) => { return id });
                await  db.knex('address')
                                        .insert({
                                                            user_id :id_user,
                                                            street:"735, rue Chabrier",
                                                            city:"Laval",
                                                            provaince:"Quebec",
                                                            country:"Canada",
                                                            cp:"H7s 2l1",
                                                        })
                                                        .returning('id_user')
                                                        .then(([id_user]) => { return id_user });
return  res.json(id_user)
};

exports.makepayment = async (req, res, next) => {
  const orderdata = req.body;


const stripe = require('stripe')(stripe_sk);
  const { amount, email } = req.body;
// Should calculate server side
      try {
        
        var generateSafeId = require('generate-safe-id');
        var orderToken = generateSafeId();
console.log('   :  ',orderdata );
        let id_order = await  db.knex('orders')
        .insert({
                    user_id:orderdata.userId,
                    payment_type:orderdata.paymentType,
                    total_amount:orderdata.totalAmount,
                    order_id:orderToken,
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
                        metadata: {order_id: orderToken},
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

exports.getCurrentUser =  function (req, res, next) {
  const user = req.user;
  if(!user) {
    return res.sendStatus(422);
  }
  return res.json(user);
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
              console.log('Tag paymentIntent.client_secret   ', paymentIntent.client_secret)
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

exports.getorderlistbyuserid = async (req, res) => {
    const clientid = req.params.clientid;

    return await cartq.getorderlistbyuserid(clientid)
    .then((result) => {  return res.json(result)})
    .catch(error =>   {return  res.status(422).send(error) })
  }

exports.clientcartwithphotos = async (req, res) => {
  const clientid = req.params.clientid;

  return await cartq.getclientcartwithphotos(clientid)
  .then((result) => {  return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.setlanginsession = async (req, res) => {
   const lang = req.params.lang;
   req.session.lang = lang;
   console.log('req.session.lang  serv  ', lang )


 }


 /************************************************************************ */
 exports.approuveorder = async (req, res, next) => {
  const orderaprobation = req.body;

  return await cartq.approuveorder(orderaprobation)
  .then((result) => {return res.json("true")})
  .catch(error =>   { return  res.status(422).send(error) })
};

 exports.createCart = async (req, res, next) => {
  const proddata = req.body;

  return await cartq.createCart(cartdata)
  .then((result) => {return res.json("true")})
  .catch(error =>   { return  res.status(422).send(error) })
};
exports.createOrder = async (req, res, next) => {
  const orderdata = req.body;

  return await cartq.inserttOrder(orderdata)
  .then((result) => {return res.json("true")})
  .catch(error =>   { return  res.status(422).send(error) })
};
exports.createShipping = async (req, res, next) => {
  const shippingata = req.body;

  return await cartq.inserttShipping(shippingata)
  .then((result) => {return res.json("true")})
  .catch(error =>   { return  res.status(422).send(error) })
};
 exports.getclientshipping =  async (req, res, next) => {
  const clientid = req.params.clientid;
  return await cartq.getclientshipping(clientid)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
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
exports.getUOrderById =  async (req, res, next) => {
  const orderId = req.params.orderId;
  return await cartq.getUOrderById(orderId)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}
exports.getUOrderByClientId =  async (req, res, next) => {
  const clientId = req.params.clientId;
  return await cartq.getUOrderByClientId(clientId)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}

exports.searchbyname =  async (req, res, next) => {
  const name = req.params.name;
  return await cartq.searchbyname(name)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}

exports.searchbyemail =  async (req, res, next) => {
  const email = req.params.email;
  return await cartq.searchbyemail(email)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}

exports.searchbyphone =  async (req, res, next) => {
  const phone = req.params.phone;
  return await cartq.searchbyphone(phone)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}


exports.searchcreatedate =  async (req, res, next) => {
  const createat = req.params.createat;
  console.log('createat  ',createat)
  return await cartq.searchcreatedat(createat)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}

exports.searchordernumber =  async (req, res, next) => {
  const ordernumber = req.params.ordernumber;
  return await cartq.searchordernumber(ordernumber)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}


exports.deletebyproductid =  async (req, res, next) => {
  const clientid = req.params.clientid;
  const productid = req.params.productid;
  return await cartq.deletebyproductid(clientid,productid)
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

exports.updatebyproductid =  async (req, res, next) => {
  const clientid = req.params.clientid;
  const productid = req.params.productid;
  const quantity = req.params.quantity;
  return await cartq.updatebyproductid(clientid,productid,quantity)
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

exports.getorderswithitsusers =  async (req, res, next) => {

  return await cartq.getorderswithitsusers()
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}

exports.getorderDetailslistbyorderid =  async (req, res, next) => {
  const orderid = req.params.orderid;
  return await cartq.getorderDetailslistbyorderid(orderid)
  .then((result) => {return res.json(result)})
  .catch(error =>   {   return  res.status(422).send(error) })
}

 /************************************************************************ */
exports.getClientById = async (req, res) => {
  const id = req.params.id;

  return await userq.getUserById(id)
  .then((result) => {return res.json(result.recordset[0])})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.getuserbyemail = async (req, res) => {

  const email = req.params.email;
  return await userq.getUserByEmail(email)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.getUserwithphotosById = async (req, res) => {
  const id = req.params.id;

  return await userq.getUserwithphotosById(id)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.getUsersByPage = async (req, res) => {

  const findUser = req.body;
  return await userq.getUsersByPage(findUser.limitpage,findUser.lastid)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.getUsersByPageIds = async (req, res) => {

  const findUser = req.body;
  return await userq.getUsersByPageIds(findUser.limitpage,findUser.lastid)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.getAllUsers = async (req, res) => {

  return await userq.getAllUsers()
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.getUserById = async (req, res) => {
  const id = req.params.id;

  return await userq.getUserById(id)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.getOrderById = async (req, res) => {
  const orderid = req.params.orderid;
  return await cartq.getOrderById(orderid)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.getUserClientByEmail =  (req, res) => {
    const email = req.params.email;
    return  userq.getUserClientByEmail(email)
    .then((result) => {return res.json(result)})
    .catch(error =>   {return  res.status(422).send(error) })
}

exports.getUserClientByUserName =  (req, res) => { 
  const username = req.params.username;
  return  userq.getUserClientByUserName(username)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.getAllUserTypeByType = async (req, res) => {
  const Usertypecode = req.params.Usertypecode;

  return await userq.getAllUserTypeByType(Usertypecode)
  .then((result) => { return  res.json(result.recordsets)})
  .catch(error =>   {return  res.status(422).send(error) })
}
exports.UseravailibilitieszipcoderadusfinderAllIds  = async (req, res) => 
{
  const findUser = req.body;
     return  await userq.UseravailibilitieszipcoderadusfinderAllIds(   findUser.latitude,
                                                                        findUser.longitude,
                                                                        findUser.distance,
                                                                        findUser.radious,
                                                                        findUser.startdate,
                                                                        findUser.enddate
                                                                      ) .then((result) => { return  res.json(result)})
                                                                      .catch(error =>   {return  res.status(422).send(error) })
}

exports.Useravailibilitieszipcoderadusfinder  = async (req, res) => 
{
  const findUser = req.body;
     return  await userq.Useravailibilitieszipcoderadusfinder(         findUser.latitude,
                                                                        findUser.longitude,
                                                                        findUser.distance,
                                                                        findUser.radious,
                                                                        findUser.startdate,
                                                                        findUser.enddate,
                                                                        findUser.limitpage,
                                                                        findUser.lastid
                                                                      ) .then((result) => { return  res.json(result)})
                                                                      .catch(error =>   {return  res.status(422).send(error) })
}

exports.Usersavailabilitiesfinder = async (req, res) => {
  const cltava = req.body;
  if(cltava.enddate === null)
        cltava.enddate = cltava.startdate
    let Useravas = await userq.Usersavailabilitiesfinder(cltava.startdate,cltava.enddate )
    .then((result) => {return result})
    .catch(error => error)

    Useravas.forEach(element => {
      
});

    return Useravas;
}
exports.zipcoderadusfinder = async (req, res) => {
  const radious = req.params.radious;
  const distance = req.params.distance;
  const latitude = req.params.latitude;
  const longitude = req.params.longitude;

  return await userq.zipcoderadusfinder(latitude,longitude,distance,radious)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}


exports.register = async function(req, res) {

  const registerData = req.body

  if (!registerData.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
        message: 'Email is required'
      }
    })
  }

  if (!registerData.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
        message: 'Password is required'
      }
    })
  }

  if (registerData.password !== registerData.passwordConfirmation) {
    return res.status(422).json({
      errors: {
        password: 'is not the same as confirmation password',
        message: 'Password is not the same as confirmation password'
      }
    })
  }
 return await userq.inserttUser(db,registerData)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}


exports.updateUserinfo = async function(req, res) {

  const UserData = req.body
   return await userq.updateUserinfo(UserData)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) }) 
}

exports.createclientevents = async function(req, res) {

  const ClientEventsData = req.body

   return await userq.createclientevents(ClientEventsData)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) }) 
}

exports.login = function (req, res, next) {

  const { email, password } = req.body
  if (!email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
        message: 'Email is required'
      }
    })
  }
  if (!password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
        message: 'Password is required'
      }
    })
  }

  return passport.authenticate('local', (err, passportUser) => {
    if (err) {
      return next(err)
    }

    if (passportUser) {
      req.login(passportUser, function (err) {
        if (err) { next(err); }
        return res.json(passportUser)
      });
    } else {
      return res.status(422).send({errors: {
        'message': 'Invalid password or email'
      }})
    }

  })(req, res, next)
}

exports.logout = function (req, res) {
  req.session.authuser = null;
  req.logout()
  return res.json({status: 'Session destroyed!'})
}

exports.searchclientbyemail =  (req, res) => {
  const email = req.params.email;

  return  userq.searchclientbyemail(email)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.searchclientbyname =  (req, res) => {
  const name = req.params.name;

  return  userq.searchclientbyname(name)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.searchclientbyphone =  (req, res) => {
  const phone = req.params.phone;
  return  userq.searchclientbyphone(phone)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}

exports.getUserEvents =  (req, res) => {
  const user_id = req.params.user_id;

  return  userq.getUserEvents(user_id)
  .then((result) => {return res.json(result)})
  .catch(error =>   {return  res.status(422).send(error) })
}