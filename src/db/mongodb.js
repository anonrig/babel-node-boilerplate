import mongoose from 'mongoose';
import Promise from 'bluebird';
import config from '../config';


mongoose.Promise =  Promise;

export function connect() {
  return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${config.get('mongo:host')}/${config.get('mongo:db')}`);
    mongoose.connection.once('open', resolve);
    mongoose.connection.on('error', reject);
  });
};
