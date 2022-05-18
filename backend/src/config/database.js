const mongoose = require('mongoose')
mongoose.Promise = global.Promise

async function main(){  
  
  var options = {
    useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
  }

  await mongoose.connect('mongodb://localhost:27017/myMonney', options)
  console.log('Conectou ao Mongoose')  
}

main().catch((err) => console.log(err))

module.exports = mongoose