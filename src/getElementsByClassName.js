// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    var result = [];

    function searchNodes(node) {
        
        
        if (node !== undefined && node.classList && node.classList.contains(className)) {

          result.push(node)
        };
        if (node.hasChildNodes()) {
          var children = node.childNodes; 

          for (var i = 0; i < children.length; i++) {

           searchNodes(children[i]); 
          }
        }
        
        
    }

  searchNodes(document.body);
  console.log(result);
  return result;
  }

