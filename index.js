require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');
const cors = require('cors');
const bearerToken = require('express-bearer-token');

// const { router_name } = require('./routers');
const { eventRouter, ticketRouter } = require('./routers')

const app = express();

app.use(cors());
app.use(express.json());
app.use(bearerToken());

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    return res.status(200).json('TICKETO API is running');
});

// Define routes here
<<<<<<< HEAD
app.use('/events', eventRouter)
=======
app.use('/event', eventRouter);
app.use('/ticket', ticketRouter);
>>>>>>> 01b471cf6dbb7da0607d762799e6ccaac371a3b4

// ERROR HANDLING EXPRESS
app.use((err, req, res, next) => {
    res.status(err.rc || 500).json(err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});