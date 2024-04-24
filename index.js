import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import { router } from './server/routes/routes.js';

const PORT = process.env.PORT;

const app = express();

app.use(express.static("static"));

app.use(bodyParser.json());
app.use(router);

const server = http.createServer(app);


server.listen(PORT, () => console.log(`Listening on Port: ${PORT} \nConnected...`));