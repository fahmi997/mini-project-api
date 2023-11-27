const router = require("express").Router();
const { accountsController } = require("../controllers");
const { uploader } = require("../helper/uploader");
const { validateToken, validateAccount } = require("../middlewares/validation");
router.post("/login", accountsController.loginAcc);
router.post("/register", accountsController.create);
router.get("/keeplogin", validateToken, accountsController.keepLogin);
router.patch("/update", validateAccount, uploader("/profile").single("fileupload"), accountsController.updateProfile)


module.exports = router;
