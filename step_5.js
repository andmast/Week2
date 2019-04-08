var https_functions = require('./https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

https_functions.getHTML(requestOptions, https_functions.printHTML);