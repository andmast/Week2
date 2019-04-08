// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
var array_of_chunks =[];


function getAndPrintHTMLChunks(requestOptions) {

    https.get(requestOptions, function (response){

        response.setEncoding('utf8');

        response.on('data', function (data) {
          array_of_chunks.push(data);
          // console.log('\n ****************Chunk this out. Data:\n',data);
        });

        response.on('end', function() {
          array_of_chunks.forEach(data => console.log(data))
          console.log('Chunks checked out: Great success');
        });

        response.on('error',function(){
          console.log('\n -+-+-+-+-+-+-+-+ Error bro, bad success\n',error);
        })
    });
}

getAndPrintHTMLChunks(requestOptions)





