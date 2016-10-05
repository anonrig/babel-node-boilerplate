import nconf from 'nconf';

const NODE_ENV = process.env.NODE_ENV || 'development';


nconf
  .argv()
  .env()
  .file({ file: 'config/default.json' })
  .file('env', { file: `config/${NODE_ENV}.json` });


export default nconf;
