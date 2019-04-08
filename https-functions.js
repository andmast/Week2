var https = require('https');
var array_of_chunks =[];

module.exports.printHTML = function printHTML(html) {
  console.log(html);
}


module.exports.getHTML = function (requestOptions,fx) {

    https.get(requestOptions, function (response){

        response.setEncoding('utf8');

        response.on('data', function (data) {
          array_of_chunks.push(data);
          // console.log('\n ****************Chunk this out. Data:\n',data);
        });

        response.on('end', function() {
          array_of_chunks.forEach(data => fx(data))
          console.log('Chunks checked out: Great success');
        });

        response.on('error',function(){
          console.log('\n -+-+-+-+-+-+-+-+ Error bro, bad success\n',error);
        })
    });
}
