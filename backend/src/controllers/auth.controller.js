const config = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    let token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      config.auth.secret,
      {
        expiresIn: 86400, // 24 hours
      }
    );
    res.status(200).send({
      id: user.id,
      username: user.username,
      role: user.role,
      accessToken: token,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.verifyToken = async (req, res) => {
  const token = req.headers["auth"];
  let jwtPayload;
  try {
    jwtPayload = jwt.verify(token, config.auth.secret);
    res.locals.user = jwtPayload;
    res.status(200).send(res.locals.user);
  } catch (error) {
    res.status(401).send("Unauthorized");
    res.locals.user = null;
    return;
  }
};
