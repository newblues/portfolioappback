const mongoose = require('mongoose');

// useNewUrlParser
const options = {
   connectTimeoutMS: 5000,
   useNewUrlParser: true,
  };

  
mongoose.connect('mongodb://master:master123@ds239903.mlab.com:39903/mytechworldapp',
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



// mongodb://alexis:azerty1@ds163835.mlab.com:63835/mytechworld'