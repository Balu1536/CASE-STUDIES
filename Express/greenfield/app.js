const express = require('express');
const app = express();
const eventsRouter = require('./routes/events');
const classesRouter = require('./routes/classes');


app.use(express.json());

// Mount the events router at /events
app.use('/events', eventsRouter);

app.get('/', (req, res) => {
 res.send('Welcome to Greenfield Community Center!');
});


app.use('/classes', classesRouter);

app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
 console.log(`Community Center server running at http://localhost:${port}`);
});
