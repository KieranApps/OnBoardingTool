import Joi from 'joi';
import { validate } from '../utils/util.js';

import myknex from '../../knexConfig.js';

import { getProjects, createProject, assignManagers } from '../services/projects.service.js';

export async function get(req, res) {
    console.log('in function')
    return 'kssks';
}

export async function getAll(req, res) {

}

export async function getForUser(req, res) {

}

export async function create(req, res) {
    const schema = Joi.object({
        name: Joi.string().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        description: Joi.string(),
        managers: Joi.array().items(Joi.number().integer().positive().required()),
    });

    const body = validate(req.body, schema);

    // Check name doesnt already exist

    const success = await myknex.transaction(async (trx) => {
        // Create project
        const details = {
            name: body.name,
            description: body.description,
            startDate: body.startDate,
            endDate: body.endDate, 
        } ;
        const project = await createProject(details, trx);
        // Use new ID to save the managers
        const managerList = [];
        body.managers.forEach(manager => {
            managerList.push({
                project_id: project[0],
                user_id: manager
            });
        });
        await assignManagers(managerList, trx)
    });

    return res.json(success);
}