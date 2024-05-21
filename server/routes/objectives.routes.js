import express from 'express';
import { asyncRequest } from '../utils/util.js';

import { get } from '../controllers/objectives.controller.js';

export const objectivesRouter = express.Router({
    mergeParams: true
});

objectivesRouter.get('/get',  asyncRequest(get));


