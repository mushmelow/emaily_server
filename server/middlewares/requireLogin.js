module.exports = (req,res, next) => {
    //verify if user from passport is login
    if(!req.user){
        return res.status(401).send({error: 'You must log in !'});
    }
    next();
};