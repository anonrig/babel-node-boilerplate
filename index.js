import App from './src';
import * as Database from './src/db';

Database
  .connect()
  .then(() => App.listenBound())
  .then(() => console.log('Successful'))
  .catch(err => console.error('Error occured', err));
