//key.js - no need to commit this
if( process.env.NODE_ENV === 'production' ){
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}