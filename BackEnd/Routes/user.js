const middleWareControllers = require("../Controllers/middleWareControllers");
const userControllers = require("../Controllers/userControllers");

const router = require("express").Router();

//GET ALL USER
router.get(
  "/getAllUser",
  middleWareControllers.verifyToken,
  userControllers.getAllUsers
);
//DELETE USER
router.delete(
  "/deleteUser/:id",
  middleWareControllers.verifyTokenAndAdmin,
  userControllers.deleteUser
);

module.exports = router;
