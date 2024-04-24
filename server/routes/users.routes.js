import express from 'express';
import { asyncRequest } from '../utils/util.js';

export const userRouter = express.Router({
    mergeParams: true
});

userRouter.post('/login',  asyncRequest(() => {
    return 'hello';
}));


