import { Request } from "express";

export interface CustomRequest extends Request {
  user?: string | null;
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: Array<String>;
  image?: string | null;
}

export interface PostBody {
  name: string;
  ingredients: Array<String>;
  image?: string | null;
}

export interface PatchBody {
  name?: string;
  ingredients: string;
  image?: string | null;
}

export interface User {
  id: number;
  name?: string;
  email: string;
  password: string;
}
