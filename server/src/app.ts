import express, {Response, Request} from 'express';
import db from './models';

import createError from 'http-errors';
import appPath from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

const port = process.env.PORT || 5000;

// view engine setup
app.set('views', appPath.join(__dirname, 'views'));
app.set('view engine', 'ejs');

db.sequelize.sync();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(appPath.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Request, next: any) {
  next(createError(404));
});
// error handler
app.use(function(err: any, req: Request, res: Response, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})

app.listen(port, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
