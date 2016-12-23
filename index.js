exports.myHandler = function(event, context, callback) {
   console.log("value1 = " + event.key1);
   callback(null, "some success message");
}