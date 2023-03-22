

(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = 
      function() { 
        handleResponse(request, 
                       responseHandler,
                       isJsonResponse); 
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler,
                        isJsonResponse) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {

    // Default to isJsonResponse = true
    if (isJsonResponse == undefined) {
      isJsonResponse = true;
    }

    if (isJsonResponse) {
      responseHandler(JSON.parse(request.responseText));
    }
    else {
      responseHandler(request.responseText);
    }
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);
















/*


(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}

//Yaakov style
// Makes an Ajax GET request to 'requestUrl'
// ajaxUtils.sendGetRequest = 
//   function(requestUrl, responseHandler) {
//     var request = getRequestObject();
//     request.onreadystatechange = 
//       function() { 
//         handleResponse(request, responseHandler); 
//       };
//     request.open("GET", requestUrl, true);
//     request.send(null); // for POST only
//   };


//HYU test begin
function sendGetRequest(requestUrl, responseHandler, isJsonResponse){
    var request = getRequestObject();
    request.onreadystatechange =
    //This is the method to pass arguments to a function expression
    //Remember f() would imply execution,
    //When we want just to pass the function as expression just f
    //so here we pass f as experssion and define the inside of f 
    //with a function execution with arguments passed
      function() { 
        handleResponse(request, responseHandler, isJsonResponse); 
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  }
ajaxUtils.sendGetRequest = sendGetRequest;
//HYU test end


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler,
                        isJsonResponse) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {

     // The Default isJsonResponse = true
     if (isJsonResponse == undefined) {
       isJsonResponse = true;
     }
     if (isJsonResponse) {
        responseHandler(JSON.parse(request.responseText));
      }
     else {
        responseHandler(request.responseText);
      }
    }
  }

// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

*/
