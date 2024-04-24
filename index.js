import 'dotenv/config';
import express from 'express';
import http from 'http';

const PORT = process.env.PORT;

const app = express();

app.use(express.static("static"));

const server = http.createServer(app);


server.listen(PORT, () => console.log(`Listening on Port: ${PORT} \nConnected...`));