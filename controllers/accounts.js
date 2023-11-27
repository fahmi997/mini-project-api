const { accounts } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { errorRespose } = require("../helper/utils");
module.exports = {
  loginAcc: async (req, res, next) => {
    try {
      const result = await accounts.findOne({
        where: {
          email: req.body.email,
          // password: req.body.password,
        },
        raw: true,
      });
      console.log("bree checked", result);
      const passBcrypt = await bcrypt.compare(
        req.body.password,
        result.password
      );
      if (passBcrypt) {
        delete result.password;
        const {
          id,
          name,
          email,
          password,
          role,
          avatar,
          refCode,
          address,
          phone,
          refPoin,
        } = result;
        const token = jwt.sign(
          {
            id,
            email,
            password,
            role,
            avatar,
            refCode,
            address,
            phone,
            refPoin,
          },
          process.env.SCRT_TKN,
          {
            expiresIn: "1h",
          }
        );
        // console.log(token);
        return res.status(200).send({
          succes: true,
          message: "Selamat login",
          result: {
            name,
            email,
            password,
            role,
            avatar,
            phone,
            address,
            refCode,
            refPoin,
            token,
          },
        });
      } else {
        return res.status(400).send({
          succes: false,
          message: "You unauthenticate",
        });
      }
    } catch (error) {
      next(errorRespose(500, false, "Error login", error.message));
    }
  },

  updateProfile: async (req, res, next) => {
    try {
      console.log("ini req file", req.file?.filename);
      const updateData = 
      {
        name: req.body.name, 
        avatar: req.file?.filename, 
        address: req.body.address, 
        phone: req.body.phone
      }
      const update = await accounts.update({ ...updateData },{
        where: {
          id: req.accountData.id
        }
      })
      console.log("ini resul update", update);
        return res.status(201).send({
          succes: true,
          update
        })
    } catch (error) {
      next(errorRespose(500, false, "Error update", error.message));
    }
  },

  create: async (req, res, next) => {
    try {
      const checkAccount = await accounts.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (checkAccount) {
        throw {
          rc: 400,
          succes: false,
          message: "Akun sudah ada",
        };
      }
      delete req.body.confirmPassword;
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashPassword;
      const result = await accounts.create(req.body);
      const token = jwt.sign(
        {
          id: result.id,
          email: result.email,
        },
        process.env.SCRT_TKN,
        {
          expiresIn: "1h",
        }
      );
      return res.status(201).send({
        succes: true,
        message: "Register succes",
      });
    } catch (error) {
      console.log(error);
      next(errorRespose(500, false, "Error create account", error.message));
    }
  },

  keepLogin: async (req, res, next) => {
    try {
      console.log("bree ini req token", req.accountData);
      const result = await accounts.findOne({
        where: {
          id: req.accountData.id,
        },
        raw: true,
      });
      const { id, name, email, role, refCode, refPoin, avatar, phone, address } = result;
      const token = jwt.sign(
        { id, id, name, email, role, refCode, refPoin, avatar, phone, address },
        process.env.SCRT_TKN,
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).send({
        succes: true,
        result: {
          id,
          name,
          email,
          address,
          role,
          phone,
          refCode,
          avatar,
          token
        },
      });
    } catch (error) {
      console.log(error);
      next(errorRespose(500, false, "Error get keep login", error.message));
    }
  },
};
