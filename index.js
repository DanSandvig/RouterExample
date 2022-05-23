const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const badgerRoutes = require('./routes/badger.js');
const fishRoutes = require('./routes/fish.js');

app.use('/badgers', badgerRoutes);
app.use('/fishes', fishRoutes);
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("I'm here!");
});

//Making a server listening on 5015
const server = app.listen(5015, () => {
    console.log(`Server has started listening on ${server.address().port}`);
});