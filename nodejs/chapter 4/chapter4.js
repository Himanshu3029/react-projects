const http = require('http');
const fs=require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home=fs.readFileSync('index.html');
const about=fs.readFileSync('./about.html');
const contact=fs.readFileSync('./contact.html');
const service=fs.readFileSync('./service.html');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log(req.url);
    url=req.url;
    res.setHeader('Content-Type', 'text/html');
   if (url=='/') {
        res.end(home);
   }
   else if (url=='/about') {
    res.end(about);
    }
   else if (url=='/service') {
        res.end(service);
   }
   else if (url=='/contact') {
    res.end(contact);
}
   else {
    res.end("404 found");
   }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
