const express = require('express');
const router = express.Router();

const ApiCtrl = require('../controllers/api');

router.get('', ApiCtrl.getPageData);

router.post('/api/checkout', async function (req, res) {

    const stripe = require('stripe')('sk_test_51Iyjy5EgszZ86rG6VmmLkSyvBXjjzacqqRytbRajCic8uMjKKMlugRbRroL6PB1rsIbj0LXzpXayziVA0P1QdtVH00rlnMHhTN');
    const hostUrl = "https://nuxt-stripe-amber.vercel.app"; //"https://login.staging.assystrealestate.com/onboard"; //
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.order, //[req.body.order],
      success_url: `${hostUrl}/${req.body.slug}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${hostUrl}/${req.body.slug}?failed=true`
    });

    return res.status(200).json(session);
  })

module.exports = router;
