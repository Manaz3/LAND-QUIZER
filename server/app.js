require ('dotenv').config()
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const sessionConfig = require('./config/session');

const app = express();
const PORT = process.env.PORT ?? 6969;

// const MainRouter = require('./routes/api/mainPage.routes');
const authRouter = require('./routes/api/auth.router');

// config
app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

// routing
// app.use('/', MainRouter);
app.use('/api', authRouter)

try {
  app.listen(PORT, () => {
    console.log(`*** Server started at ${PORT} port ***`);
  });
} catch (error) {
  console.log(error.message);
}