const User = require("../Models/User");

const userControllers = {
  //get All User
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  //delete User
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Delete Successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userControllers;
