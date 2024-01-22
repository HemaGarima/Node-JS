const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req , res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
    console.log(req.url);
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> This is CodeWithHarry </h1> <p> Hey this is about CodeWithHarry!</p>')
    }
    else if(req.url == '/cwh'){
        res.statusCode = 200;
        res.end('<h1> This is CodeWithHarry </h1> <p> Hey this is the way to rock the world!</p>')
    }
    else{
        res.statusCode = 400;
        res.end('<h1> Not found </h1>');
    }
})

server.listen(port , ()=>{
    console.log(`Server is listening on port ${port}`);
});