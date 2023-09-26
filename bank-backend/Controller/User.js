const NewUsers = require("../Model/User");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createAccount = (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    NewUsers.findOne({ email: email })
      .then(async (user) => {
        if (!user) {
          const saltRounds = 10;
          const hashpassword = await bycrypt.hash(password, saltRounds);
          NewUsers.create({
            name: name,
            email: email,
            password: hashpassword,
          });
          res.status(200).send("Account Created");
        } else {
          res.status(409).send("User Already Exits");
        }
      })
      .catch((err) => console.log(err));
  } catch (ex) {
    next(ex);
  }
};

// login
exports.login = (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    NewUsers.findOne({ email: email }).then(async (user) => {
      if (user) {
        let pass = await bycrypt.compare(password, user.password);
        if (pass) {
          const token = jwt.sign(user.name, process.env.SECRET);
          res.status(200).send({ msg: "Login Successfully", token: token });
        } else {
          res.status(403).send("incorrect Password");
        }
      } else {
        res.status(404).send("User Not Found");
      }
    });
  } catch (error) {
    res.status(error);
  }
};
