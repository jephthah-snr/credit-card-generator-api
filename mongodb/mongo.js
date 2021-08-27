const mongoose = require('mongoose')

connectDb = mongoose.connect('/////////////////////', {
useNewUrlParser:true,
 useCreateIndex:true,
  useUnifiedTopology:true, 
  useFindAndModify:false
});

mongoose.connection.once('open', ()=> {
    console.log('you are connected to your mongo database')
}).on('error', (error)=> {
    console.log(`error occured while trying to connect to data base ${error}`)
})


module.exports = connectDb;