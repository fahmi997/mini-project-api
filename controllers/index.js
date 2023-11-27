// const controller_name = require('./controller_name');
const eventController = require('./event')
const ticketController = require('./ticket');
const cityController = require('./city');
const accountsController = require("./accounts")
const promoController = require('./promo');

module.exports = {
    accountsController,
    eventController,
    ticketController,
    promoController,
    cityController
};