const express = require('express');
const app = express();
const usersRouter = require('./routes/users.js');
const wpisyRouter = require('./routes/wpisy.js');
const komentarzeRouter = require('./routes/komentarze.js');
const kategorieRouter = require('./routes/kategorie.js');



app.use(express.json());

//połączenie z mongo
let mongoDb
async function connectMongo(){
    try{
        const client = await MongoClient.connect(process.env.MONGO_URL)
        mongodb = client.db('logsDB')
        console.log('Połączono z Mongo')
    }catch(err){
        console.log('Problem z połączeniem z mongo: ' + err)
    }
}

connectMongo();

//middleware dla logs
app.use(async (req, res, next) => {
    if(!mongoDb) return next()

    const logEntry = {
        method: req.method,
        url:req.url,
        timestamp: new Date(),
        ip: req.ip

    }

    try{
        await mongoDb.collection("acccessLogs").insertOne(logEntry)

    }catch(err){
        console.log('Problem z zapisem access loga: '+err)
    }

    next()
})

//routery
app.use('/wpisy', wpisyRouter);
app.use('/komentarze', komentarzeRouter);
app.use('/users', usersRouter);
app.use('/kategorie', kategorieRouter);
app.get('/', (req, res) => {
    res.send('API działa');

})

//middleware - error dla logowania
app.use(async (err, req, res, next) => {
    console.error(err);
    if(mongoDb){
        await mongoDb.collection("errorLogs").insertOne({
            error: err.message,
            stack: err.stack,
            timestamp: new Date(),
            url: req.originalUrl
        })

    }

    res.status(500).json(err)
})





app.listen(3000, () => console.log("Server on http://localhost:3000"));