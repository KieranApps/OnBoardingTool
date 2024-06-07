import express from 'express';
import { asyncRequest } from '../utils/util.js';

import { login, getAllManagers } from '../controllers/user.controller.js';
import { isLoggedIn } from '../middleware/auth.middleware.js';

export const userRouter = express.Router({
    mergeParams: true
});

userRouter.post('/login',  asyncRequest(login));
userRouter.get('/managers/all', isLoggedIn, asyncRequest(getAllManagers));

