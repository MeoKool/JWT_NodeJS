const jwt = require("jsonwebtoken");

const middleWareControllers = {
  //verify token
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.MY_SECRET_KEY, (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid!");
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  },
  verifyTokenAndAdmin: (req, res, next) => {
    middleWareControllers.verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.admin) {
        next();
      } else {
        return res.status(403).json("You are not allowed to do that!");
      }
    });
  },
};

module.exports = middleWareControllers;
