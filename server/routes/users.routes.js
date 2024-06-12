import express from 'express';
import { asyncRequest } from '../utils/util.js';

import { login, getAllManagers, addUser } from '../controllers/user.controller.js';
import { isLoggedIn, canAddNewUser } from '../middleware/auth.middleware.js';

export const userRouter = express.Router({
    mergeParams: true
});

userRouter.post('/login',  asyncRequest(login));
userRouter.post('/add', canAddNewUser, asyncRequest(addUser))
userRouter.get('/managers/all', isLoggedIn, asyncRequest(getAllManagers));

