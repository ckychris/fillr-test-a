module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here
  var results = Object.keys(hash).filter( field => field.match("card expire date"));
  return results;
}
