// It is used to verifty the user to perform any tasks.
//This middleware checks wether the user is authenticate to perform any task.

const jwt = require("jsonwebtoken");
const SECRET_KEY = "dfhdsjsdjfa";

const fetchUser = (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
    }
    const data = jwt.verify(token, SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchUser;

