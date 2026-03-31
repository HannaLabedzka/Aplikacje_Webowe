
const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs/promises');
const path = require('path');
const mime = require('mime-types');



    app.get('/', (req, res) => {
    res.send('Strona Główna');
});

app.get('/json', (req, res) => {

    res.sendFile(path.join(__dirname, 'example.json'));


});

app.get('/html-wew', (req, res) => {
    res.send('<h1>HTML inside Node.js</h1>');

});

app.get('/html-plik', (req, res) => {

    res.sendFile(path.join(__dirname, 'example.html'));
})


app.get('/get_params', async (req, res) => {
    const name_get = req.query.name
    const age_get = req.query.age
    console.log('Name: ', name_get)
    console.log('Age: ', age_get);

    const queryResult = { name: name_get, age: age_get };
    await fs.writeFile(`params_${Date.now()}.json`, JSON.stringify(queryResult, null, 2));
    res.json({ ok: 'ok' });

    //http://localhost:8080/get_params/?name=Mila&age=15
});


app.get('*', async (req, res) => {

    try {
        const filePath = path.join(__dirname, 'assets', fileName);
        await fs.access(filePath);
        const mimeType = mime.lookup(filePath) || 'application/octet-stream';
        res.setHeader('Content-Type', mimeType);
        res.sendFile(filePath)

    }catch(err) {
        res.status(404).json({
            error: 'File Not Found',
            path: req.path,
        });
    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});