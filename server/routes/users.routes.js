import express from 'express';
import { asyncRequest } from '../utils/util.js';

import { login, } from '../controllers/user.controller.js';

export const userRouter = express.Router({
    mergeParams: true
});

userRouter.post('/login',  asyncRequest(login));


