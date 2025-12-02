const express = require('express');
const app = express();
const usersRouter = require('./routes/wpisy.js');


app.use(express.json()); // body parser json
app.use('/wpisy', usersRouter);
app.use('/komentarze', usersRouter);
app.use('/users', usersRouter);
app.use('/kategorie', usersRouter);
app.get('/', (req, res) => {
    res.send('API działa');

})
app.listen(3000, () => console.log("Server on http://localhost:3000"));