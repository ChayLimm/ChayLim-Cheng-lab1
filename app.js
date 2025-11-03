const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello, CI/CD!');
});
module.exports = app;

// import express from 'express';
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, GitHub Actions!');
// });

// export default app;
