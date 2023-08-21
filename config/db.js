require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
   
   try{ 
       connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
       })
   }
    catch(e){
        console.log('Connection failed ☹️☹️☹️☹️');
      };
}


module.exports = connectDB;
