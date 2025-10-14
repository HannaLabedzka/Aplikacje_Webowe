const http = require('http');
let fs = require('fs');
let url = require('url');
const { writeFile, readFile } = require('fs/promises');


const srv = http.createServer(async function (req, res) {

    let parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;
    let m_query = parsedUrl.query;

    if (pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Strona glowna');

    } else if (pathname === '/html_wew') {

        res.writeHead(200, {'content-type': 'text/html'});
        res.end('<h1>Tu jest html w Node.js</h1>');

    } else if (pathname === '/json') {
        fs.readFile('example.json', function (err, data) {

            if (err) {
                res.writeHead(200, {"content-type": 'text/plain'});
                res.end('Blad odczytu pliku JSON');
            } else {
                res.writeHead(200, {"content-type": 'application/json'});
                res.end(data);
            }

        });

    } else if (pathname === '/html_plik') {
        czyt.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(200, {"content-type": 'text/plain'});
                res.end('Blad odczytu pliku JSON');
            } else {
                res.writeHead(200, {"content-type": 'text/html'});
                res.end(data);
            }

        });
    } else if (pathname === '/get_params') {

        //wyświetl w konsoli Node.js 
        //parametry przekazane metodą GET

        const adr = 'http://localhost:3000/get_params/?name=Mila&age=15'
        const parsedAdr = new URL(adr);

        let name_get = parsedAdr.searchParams.get('name');
        let age_get = parsedAdr.searchParams.get('age');
        console.log(m_query)
        console.log('Imie: ', name_get);
        console.log('Wiek: ', age_get);

        const queryResult = m_query.query;
        await writeFile(`params_${Date.now().toString()}.json`, JSON.stringify(queryResult, null, 2));

        const json = {
            ok: 'ok',
        }
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(json));

    }

});

srv.listen(3000, '127.0.0.1', () => {
    console.log(`Listening on http://127.0.0.1:3000`)});
              