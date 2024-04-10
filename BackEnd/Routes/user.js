const userControllers = require("../Controllers/userControllers");

const router = require("express").Router();

//GET ALL USER
router.get("/getAllUser", userControllers.getAllUsers);
//DELETE USER
router.delete("/deleteUser/:id", userControllers.deleteUser);

module.exports = router;
