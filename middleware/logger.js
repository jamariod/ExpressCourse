//Middleware

//3rd party package named "moment" is used to format the date and time
const moment = require("moment");
const logger = (req, res, next) => {
  //Used to get webpage and the date and time.
  console.log(
    `${req.protocol}: //${req.get("host")}${
      req.originalUrl
    }${moment().format()}`
  );
  next();
};

module.exports = logger;
