import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 1000 * 60 * 60 * 24 * 15,
    httpOnly: true, // prevent xss attacks cross site scripting attacks
    sameSite: "strict", // csrf attacks cross site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};
