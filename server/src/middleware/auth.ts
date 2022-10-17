const jwt = require("jsonwebtoken");

const authenticate = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authenticate;
