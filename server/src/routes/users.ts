const userExpress = require("express");
const { signup,signin } = require("../controllers/users");

const userRouter = userExpress.Router();

userRouter.post("/signin", signin);
userRouter.post("/signup", signup);

export default userRouter;