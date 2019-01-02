//key.js figure out what set of credential to return

if (process.env.NODE_ENV === 'production'){
    // we are in 
    module.exports = require('./prod');

}
else{
    // we are in developemnt - return the dev keys
    module.exports = require('./dev');
}