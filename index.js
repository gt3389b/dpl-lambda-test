const uuidv4 = require('uuid/v4');
const uuidv5 = require('uuid/v5');

const UUID_NAMESPACE = uuidv4();  // 

exports.myHandler = function(event, context, callback) {
   if (event.key1) {
      console.log("value1 = " + event.key1);
      callback(null, uuidv5(event.key1, UUID_NAMESPACE));
      }
   else {
      callback(null, "need key1 in request body");
   }
}
