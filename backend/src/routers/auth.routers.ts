import "../bootstrap";
import express, { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import db from "../database";
// import authMiddleware from "../middleware/auth.middleware";

const router = express.Router();

router.post("/api/registration", async (req: Request, res: Response) => {
  try {
    if (!Object.keys(req.body).length) {
      return res.status(400).send({ message: "Uncorrect request!" });
    }
    const { email, password, name } = req.body;
    // const user = await db.User.findOne({ email });
    // if (!user) return res.status(400).send({ message: "User not found!" });
    // const isValid = await bcrypt.compareSync(password, user.password);
    // if (!isValid) return res.status(400).send({ message: "Invalid Password" });
    // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
    //   expiresIn: "1h",
    // });

    // return res.status(200).send({
    //   token,
    //   user: {
    //     id: user.id,
    //     email: user.email,
    //     name: user.name,
    //   },
    // });
  } catch (err) {
    console.log(`[error-regisration]:`, err);
    return res.send({ message: `Server Error` });
  }
});

export default router;
