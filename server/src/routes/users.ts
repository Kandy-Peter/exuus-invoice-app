const userExpress = require("express");
const { userSignin, userSignup } = require("../../controllers/user");

const userRouter = userExpress.Router();

userRouter.post("/signin", userSignin);
userRouter.post("/signup", userSignup);

module.exports = router;
