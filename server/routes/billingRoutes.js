const keys = require('../config/key');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

//using await/async
module.exports = (app) => {
    app.post('/api/stripe',requireLogin, async (req,res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });
        //console.log("charge:  ",charge)

        //add credit to user account
        req.user.credits += 5;
        const user = await req.user.save();
        //send back user to fron end
        res.send(user);
    });
};

/*
//charge with normal promise
module.exports = (app) => {
    app.post('/api/stripe', (req,res) => {
        console.log(req.body.id)
        return stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        }).then( result =>{
            console.log("test!!!!!!!!!!", result)
        }).catch( err =>{
            console.log(err)
        })
    });
};
*/




