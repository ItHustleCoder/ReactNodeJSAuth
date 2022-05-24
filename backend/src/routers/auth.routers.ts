import "../bootstrap";
import express, { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import db from "../database";

const authMiddleware = require( "../middleware/auth.middleware");
const router = express.Router();

router.post("/api/auth/registration", async (req: Request, res: Response) => {
  try {
    if (!Object.keys(req.body).length)
      return res.status(400).send({ message: "Uncorrect request!" });

    const { email, password, name } = req.body;
    const candidate = await db.User.findOne({ where: { email: email } });
    if (candidate) {
      return res
        .status(400)
        .send({ message: `User with email ${email} already exists` });
    }

    const hasPassword = await bcrypt.hash(password, 8);
    const storeUser = await db.User.create({
      name,
      email,
      password: hasPassword,
    });
    if (storeUser) {
      return res.status(200).send({ message: "User was created" });
    }
  } catch (err) {
    console.log(`[error-regisration]:`, err);
    return res.send({ message: `Server Error` });
  }
});

router.post("/api/auth/login", async (req: Request, res: Response) => {
  try {
    if (!Object.keys(req.body).length)
      return res.status(400).send({ message: "Uncorrect request!" });

    const { email, password } = req.body;

    const user = await db.User.findOne({ where: { email } });
    if (!user) return res.status(404).send({ message: "User not found" });
    const isValidPass = await bcrypt.compareSync(password, user.password);

    if (!isValidPass)
      return res.status(404).send({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    return res.status(200).send({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.log(`[login-error]: ${err}`);
    return res.send({ message: "Server Error" });
  }
});


router.get("/api/auth/token", authMiddleware, async (req:any, res:Response) => {
  try {
    const user = await db.User.findOne({
      where: { id: req.user.id }
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });

     return res.status(200).send({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      },
    });

  } catch (err) {
      console.log(`[login-error]: ${err}`);
      return res.send({ message: "Server Error" });

  }
});


export default router;
