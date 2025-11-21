import express from 'express';
import cors from 'cors';
import connectDB from './models/db.config.js';
import routes from './routes/routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

(async () => {
  await connectDB();

  // test route
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // use your routes
  app.use('/api', routes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
})();
