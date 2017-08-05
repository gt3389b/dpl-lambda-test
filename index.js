const uuidv5 = require('uuid/v5');

exports.myHandler = function(event, context, callback) {
   if (event.key1) {
      console.log("value1 = " + event.key1);
      callback(null, uuidv5(event.key1, uuidv5()));
      }
   else {
      callback(null, "need key1 in request body");
   }
}
