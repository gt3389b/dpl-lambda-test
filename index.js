exports.myHandler = function(event, context, callback) {
   if (event.key1) {
      console.log("value1 = " + event.key1);
      callback(null, "some success message");
      }
   else {
      callback(null, "need key1 in request body");
   }
}
