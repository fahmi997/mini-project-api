// const controller_name = require('./controller_name');
const eventController = require('./event')
const ticketController = require('./ticket');
const cityController = require('./city');
const accountsController = require("./accounts")

module.exports = {
    accountsController,
    eventController,
    ticketController,
    cityController
};