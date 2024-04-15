import express from "express";
import {signUp} from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signup', signUp);

export default router;