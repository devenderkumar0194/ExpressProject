// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const { errorHandler} = require('./middlewares/error.middleware');
const passport = require('passport');
const passportConfig = require('./config/passport');
const cors = require('cors');
app.use(cors());


// Middleware to parse JSON
app.use(express.json());
require('./config/db');

// Initialize Passport
app.use(passport.initialize());
passportConfig(passport);



// Sample route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


app.use('/users', userRoutes);
app.use('/products', productRoutes);


app.use(errorHandler);
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
