import "../bootstrap";
import * as jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { CustomRequest } from "../types/index";

module.exports = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization?.split(" ")[1];

    console.log(token);
    if (!token) {
      return res.status(401).send({ message: "Auth error" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    let pars = JSON.parse(decoded as string);
    console.log("Test", pars);
    req.user = pars;
    next();
  } catch (err) {
    return res.status(400).send({ message: "Auth error ", err });
  }
};
