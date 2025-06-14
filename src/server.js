// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/user.routes');
const { errorHandler} = require('./middlewares/error.middleware');
// Middleware to parse JSON
app.use(express.json());
require('./config/db');

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});



app.use('/users', userRoutes);

app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
