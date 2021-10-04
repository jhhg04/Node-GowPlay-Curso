import mongoose from 'mongoose';
import { database } from './keys';

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => console.log('DB is connected'))
  .catch((err) => console.log(err));
