require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 5000;
const mentorsRouter = require('./routes/api/mentors.routes');
const studentsRouter = require('./routes/api/students.routes');
const serverConfig = require('./config/serverConfig');

// config
serverConfig(app);

// routing
app.use('/api/mentors', mentorsRouter);
app.use('/api/students', studentsRouter);

try {
  app.listen(PORT, () => {
    console.log(`*** Server started at ${PORT} port ***`);
  });
} catch (error) {
  console.log(error.message);
}