import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/app';
import pool from './settings/db';

const app = express();
const port = 5000;
const corsOptions = {
  origin: 'http://example.com',
  optionSuccessStatus: 200,
};

/*
  Public Files
*/
app.use(express.static(path.join(__dirname, 'public')));

/*
// Test server navigador
app.get('/', (req, res) => {
  res.send('Hello World');
});
*/

/*
  Middelware
*/
app.use(morgan('dev'));
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

/*
  Routes
*/
app.use('/api', cors(corsOptions), router);

/*
  Init Server
*/
app.set('port', process.env.PORT || port);

app.listen(app.get('port'), () => {
  console.log(`Server is listening at http://localhost:${app.get('port')}`);
});
