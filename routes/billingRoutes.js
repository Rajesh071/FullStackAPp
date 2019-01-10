
const keys = require('../config/key')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')
module.exports = (app) => {
     
    app.post('/api/stripe',requireLogin,async (req,res) => {
       
       // console.log("---------------@@@@@@@@%%%%%%*****",req.body);

      const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: req.body.id, // obtained with Stripe.js
            description: "$5 to create five survey credit" }
      );

          console.log("---------------@@@@@@@@%%%%%%*****",charge);

        req.user.credits += 5;
        const user =  await req.user.save();
        res.send(user);

    });
}