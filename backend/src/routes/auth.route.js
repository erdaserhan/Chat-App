import express from 'express';
import { login, logout, singup, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/singup", singup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile) //protectRoute : To check if the person authenticated or logged in. If yes we call next() middleware which is updateProfile

export default router;
