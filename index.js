import 'dotenv/config';
import express from 'express';
import cookieSession from 'cookie-session';
import bodyParser from 'body-parser';
import http from 'http';
import { router } from './server/routes/routes.js';
import { errorHandler } from './server/utils/errorhandler.js'
const PORT = process.env.PORT;

const app = express();

app.use(express.static("static"));

app.use(cookieSession({
    name: 'session',
    keys: ['first'],

    maxAge: 30 * 24 * 60 * 60 * 1000 // 1 month
}));

app.use(bodyParser.json());

app.use(router);

// Must be at bottom
app.use(errorHandler);

const server = http.createServer(app);


server.listen(PORT, () => console.log(`Listening on Port: ${PORT} \nConnected...`));