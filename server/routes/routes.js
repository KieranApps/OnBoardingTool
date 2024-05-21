import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { asyncRequest } from '../utils/util.js';

import { getConfig } from '../controllers/config.controller.js'
import { userRouter } from './users.routes.js';
import { projectsRouter } from './projects.routes.js';
import { objectivesRouter } from './objectives.routes.js';

export const router = express.Router({
    mergeParams: true
});

router.use(bodyParser.urlencoded({
    extended: true
}));

const whitelist = [];
if(process.env.NODE_ENV === 'development'){
    whitelist.push(process.env.FRONT_END);
}else if(process.env.NODE_ENV === 'production'){
    whitelist.push(process.env.FRONT_END);
}
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
    credentials: true
};

router.use(cors(corsOptions));

router.use(bodyParser.json());

// Routes
router.use('/api/config', asyncRequest(getConfig));
router.use('/api/users', userRouter);
router.use('/api/projects', projectsRouter);
router.use('/api/objectives', objectivesRouter);