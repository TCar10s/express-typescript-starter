import express from 'express'; // ESModules
//const express = require('express'); -> CommonJS

import diaryRouter from './routes/diaries';

const app = express();
app.use(express.json()); // Middleware for tranform req.body to json.

const PORT = 3000;

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
