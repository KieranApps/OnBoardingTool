import express from 'express';
import { asyncRequest } from '../utils/util.js';

import { isLoggedIn } from '../middleware/auth.middleware.js';
import { get, getAll, getForUser } from '../controllers/projects.controller.js';

export const projectsRouter = express.Router({
    mergeParams: true
});

projectsRouter.get('/get', isLoggedIn, asyncRequest(get));
projectsRouter.get('/getAll',  asyncRequest(getAll));
projectsRouter.get('/getForUser',  asyncRequest(getForUser));


