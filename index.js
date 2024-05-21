import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import http from 'http';
import { router } from './server/routes/routes.js';
import { errorHandler } from './server/utils/errorhandler.js'
const PORT = process.env.PORT;

const app = express();

app.use(express.static("static"));

app.use(session({ 
    secret: 'catcar',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.json());

app.use(router);

// Must be at bottom
app.use(errorHandler);

const server = http.createServer(app);


server.listen(PORT, () => console.log(`Listening on Port: ${PORT} \nConnected...`));