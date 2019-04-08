var print_options = require('./callbacks/print_options');

var https_functions = require('./https-functions')


var requestOptions = [
{
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
},
{
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
},
{
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
},
{
  host: 'sytantris.github.io',
  path: '/http-examples/step6/l337.html'
}];

https_functions.getHTML(requestOptions[0], print_options.printUpperCase) ;

https_functions.getHTML(requestOptions[1], print_options.printLowerCase) ;

https_functions.getHTML(requestOptions[2], print_options.printReverse) ;



