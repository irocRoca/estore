const router = require("express").Router();
const userCtrl = require("../controller/user");

// router.get("/", userCtrl);
router.post("/login", userCtrl.login);
router.post("/register", userCtrl.signUp);
router.post("/logout", userCtrl.logout);
router.post("/auth", userCtrl.checkAuth);
//router.get("/", (req, res) => res.json("hello"));

module.exports = router;
