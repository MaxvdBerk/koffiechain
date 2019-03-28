const http = require('http');
var i; 
var resp;
for (i=0;i<100;i++){
    http.get('localhost:80', (resp));
    console.log(resp);
}