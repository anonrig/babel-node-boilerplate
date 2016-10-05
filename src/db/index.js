import * as mongodb from './mongodb';
import Promise from 'bluebird';


export function connect() {
  return mongodb.connect();
};
