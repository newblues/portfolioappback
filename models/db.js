const mongoose = require('mongoose');

// useNewUrlParser
const options = {
   connectTimeoutMS: 5000,
   useNewUrlParser: true,
  };

mongoose.connect('mongodb://alexis:azerty1@ds163835.mlab.com:63835/mytechworld',
    options,
    function(err) {
     if (err) {
       console.log(err);
     } else {
       console.log('DATABASE IS CONNECTED');
     }
    }
);

module.exports = mongoose;
