const jwt = require("jsonwebtoken");
module.exports = {
  validateToken: async (req, res, next) => {
    try {
      if (!req.token) {
        return res.status(400).send({
          succes: false,
          message: "You not have a token",
        });
      } else {
        const verifyToken = jwt.verify(req.token, process.env.SCRT_TKN);
        if (!verifyToken) {
          return res.status(401).send({
            succes: false,
            message: "Unautorized request",
          });
        }
        req.accountData = verifyToken;
        next();
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },

  validateAccount: async (req, res, next) => {
    try {
      if (!req.token) {
        return res.status(400).send({
          succes: false,
          message: "You not have a token",
        });
      } else {
        const verifyToken = jwt.verify(req.token, process.env.SCRT_TKN);
        if (!verifyToken) {
          return res.status(401).send({
            succes: false,
            message: "Unautorized request",
          });
        }
        req.accountData = verifyToken;
        next();
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },

  
};
