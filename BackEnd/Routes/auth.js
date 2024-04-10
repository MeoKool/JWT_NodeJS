const authControllers = require("../Controllers/authControllers");
const middleWareControllers = require("../Controllers/middleWareControllers");

const router = require("express").Router();

router.post("/register", authControllers.registerUser);
router.post("/login", authControllers.loginUser);
router.post("/refresh", authControllers.refreshToken);
router.post(
  "/logout",
  middleWareControllers.verifyToken,
  authControllers.logout
);
module.exports = router;
