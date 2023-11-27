// const router_name = require('./router_name');
const eventRouter = require("./event");
const ticketRouter = require("./ticket");
const cityRouter = require("./city");
const accountsRouter = require("./accounts");

module.exports = {
  accountsRouter,
  eventRouter,
  ticketRouter,
  cityRouter,
};
