const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const { writeFile, readFile } = require('fs/promises')
const mime = require('mime-types')

const srv = http.createServer(async function (req, res) {

    let urlPath = req.url;
    const filePath = path.join('assets', urlPath);

    let parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;
    let m_query = parsedUrl.query;

    if (pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Main page');

    } else if (pathname === '/html_wew') {

        res.writeHead(200, {'content-type': 'text/html'});
        res.end('<h1>HTML inside Node.js</h1>');

    } else if (pathname === '/json') {
        fs.readFile('example.json', function (err, data) {

            if (err) {
                res.writeHead(200, {"content-type": 'text/plain'});
                res.end('Cant read JSON file');
            } else {
                res.writeHead(200, {"content-type": 'application/json'});
                res.end(data);
            }

        });

    } else if (pathname === '/html_plik') {
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(200, {"content-type": 'text/plain'});
                res.end('Cant read JSON file');
            } else {
                res.writeHead(200, {"content-type": 'text/html'});
                res.end(data);
            }

        });
    } else if (pathname === '/get_params') {


        const adr = 'http://localhost:3000/get_params/?name=Mila&age=15'
        const parsedAdr = new URL(adr);

        let name_get = parsedAdr.searchParams.get('name');
        let age_get = parsedAdr.searchParams.get('age');
        console.log(m_query)
        console.log('Name: ', name_get);
        console.log('Age: ', age_get);

        const queryResult = m_query;
        await writeFile(`params_${Date.now().toString()}.json`, JSON.stringify(queryResult, null, 2));

        const json = {
            ok: 'ok',
        }
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(json));

    }else{ //jeśli wcześniejsze ścieżki nie bedą poprawne

        try {
            const data = await fs.readFile(filePath);
            const contentType = mime.lookup(filePath) || 'application/octet-stream'; //na wypadek gdyby rozszerzenie pliku bylo nieznane
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(data);

        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        }
    }

});

srv.listen(3000, '127.0.0.1', () => {
    console.log(`Listening on http://127.0.0.1:3000`)});
