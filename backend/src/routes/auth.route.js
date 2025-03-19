import express from 'express';
import { checkAuth, login, logout, signup, updateProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile); //protectRoute : To check if the person authenticated or logged in. If yes we call next() middleware which is updateProfile

router.get("/check", protectRoute, checkAuth); //When refresh the page we check if the user authenticated

export default router;
