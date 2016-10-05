import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import Promise from 'bluebird';
import http from 'http';
import config from './config';


let app = express();
let server = http.Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  let err = new Error('Not Found');

  res.status(404).json({
    message: err.message,
    error: {}
  });
});

app.listenBound = () => {
  return new Promise((resolve, reject) => {
    server.listen(process.env.PORT || config.get('http:port'), (err) => {
      if (err) return reject(err);

      resolve();
    });
  });
};

export default app;
