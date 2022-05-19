import { Router } from "express";
import recepiRoutes from "./recipe.router";
import authRouters from "./auth.routers";

const routes = Router();
routes.use(recepiRoutes);
routes.use(authRouters);

export default routes;
