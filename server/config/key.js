if(process.env.NODE_ENV === 'production'){
    //we are in production - return the prod keys!!
    //require and export prod.js
    module.exports = require('./prod')
}else{
    //we are in development - return the dev keys!!
    //require and export dev.js
    module.exports = require('./dev')
}