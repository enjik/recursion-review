// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) { //null, undefined, number, Arrays, objects, strings, bools
  // your code goes here
  console.log(obj);
  console.log(typeof(obj));
  var dealingWithFunction = false;
  if (typeof(obj) === 'function') {
  
  }
  
  if (Array.isArray(obj)) { // checks array
  var arrayTemp = "["
    for (var i = 0; i < obj.length; i++) {
        arrayTemp += (stringifyJSON(obj[i]));
        console.log("recursive");
        if (i < obj.length-1 ) {
          arrayTemp += ","
        }
     }
     arrayTemp += ']';
     return arrayTemp;
  }
  else if (typeof(obj) === 'object' && obj != null) {
    if (Object.keys(obj).length === 0) {

      return '{}';
    }

    var objTemp = "{";
    for (var key in obj) {
      if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {
        objTemp += '"' + key + '":' +  stringifyJSON(obj[key]) + ',';
      }
      else {
        dealingWithFunction = true;
      }
    }
    if (dealingWithFunction) {
      return "{}";
    }
    objTemp = objTemp.slice(0, objTemp.length-1);
    objTemp += "}";
    return objTemp;
  }
  else if (typeof(obj)=== 'string') {
    return '"' + obj + '"';
  }
  else if (typeof(obj) !== 'function') {
    return  "" + obj + "";
  
  }
  
};