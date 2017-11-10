module.exports.extract = function(window) {

  // Write your solution to Task #2 - Extract Metadata task here
  // non general solution to extract metadata from http://autofill.mozdev.org/autofilltest.html
  var doc = window.document;
  var forms = doc.getElementsByTagName('form');
  var trs = forms[0].getElementsByTagName('tr');
  var inputs = forms[0].getElementsByTagName('input');

  // return fields contains input
  var fields = Array.prototype.slice.call(trs, 0);
  var fields = fields.filter(function(el){
      return el.getElementsByTagName('td').length >= 2;
  });

  // create metadata json hash
  var metadata = {};
  for (field in fields){
      var key = fields[field].getElementsByTagName('td')[0].innerHTML.trim();
      var nameAttr = fields[field].getElementsByTagName('td')[1].firstChild.getAttribute("name");
      metadata[key] = key + " " + nameAttr;
  }
  return metadata;

}
