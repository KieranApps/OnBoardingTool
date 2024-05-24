import express from 'express';
import { asyncRequest } from '../utils/util.js';

import { isLoggedIn, canCreateProject } from '../middleware/auth.middleware.js';
import { get, getAll, getForUser, create } from '../controllers/projects.controller.js';

export const projectsRouter = express.Router({
    mergeParams: true
});

projectsRouter.get('/get', isLoggedIn, asyncRequest(get));
projectsRouter.get('/getAll',  asyncRequest(getAll));
projectsRouter.get('/getForUser',  asyncRequest(getForUser));
projectsRouter.post('/create', canCreateProject, asyncRequest(create));


