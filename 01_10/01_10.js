let http = require('http');
let czyt = require('fs');

http.createServer(function (req, res) {

    if(req.url==='/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Strona glowna');

    }else if(req.url==='/html_wew'){

        res.writeHead(200, {'content-type':'text/html'});
        res.end('<h1>Tu jest html w Node.js</h1>');

    }else if(req.url==='/json'){
        czyt.readFile('example.json', function(err, data){

            if(err){
                res.writeHead(500, {"content-type":'text/plain'});
                res.end('Blad odczytu pliku JSON');
            }else{
                res.writeHead(200, {"content-type":'application/json'});
                res.end(data);
            }
            
        });

    }else if(req.url==='/html_plik'){
        czyt.readFile('index.html', function(err, data){
            if(err){
                res.writeHead(500, {"content-type":'text/plain'});
                res.end('Blad odczytu pliku JSON');
            }else{
            res.writeHead(200, {"content-type":'text/html'});
            res.end(data);}
        
    });

}
    
}).listen(8090);



              