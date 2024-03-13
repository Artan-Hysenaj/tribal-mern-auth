import jwt from "jsonwebtoken";
import asynvHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asynvHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, token invalid");
  }
});

export { protect };
