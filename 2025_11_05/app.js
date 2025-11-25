const db = require('./db');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/strony", express.static(path.join(__dirname, "strony")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/strony/main.html'));
});

app.get('/o_nas', (req, res) => {
    res.sendFile(path.join(__dirname, '/strony/o_nas.html'));
});

app.get('/oferta', (req, res) => {

    res.sendFile(path.join(__dirname, '/strony/oferta.html'));


});
app.get('/kontakt', (req, res) => {

    res.sendFile(path.join(__dirname, '/strony/kontakt.html'));


});

app.post('/kontakt', (req, res) => {
    const {name, email, message} = req.body;
    const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.log('Blad zapisu wiadomosci', err)
            return res.status(500).send('Blad serwera')
        }
        console.log('Otrzymano dane z formularza kontaktowego:');
        console.log(req.body);
        res.redirect('/');
    })
});

app.get('/api/contact-messages', (req, res) => {
    const sql = 'SELECT * FROM messages ORDER BY created_at DESC';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Błąd podczas pobierania wiadomości:', err);
            return res.status(500).json({ error: 'Błąd serwera' });
        }
        res.json(result);
    })
})

app.get('/api/contact-messages/:id', (req, res) => {
    const id= req.params.id;
    const sql = 'SELECT * FROM messages WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Blad zapytania: ', err)
            res.status(500).send('Blad serwera');
        }
        if(result.length == 0){
            res.status(404).send('Nie znaleziono wiadomosci o podanym ID');

        }

        res.json(result[0]);
    })

})

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req,res, next) {
    next(createError(404));
    });


app.use(function(err, req, res, next) {

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
