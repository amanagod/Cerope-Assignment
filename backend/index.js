import express from 'express';
import cors from 'cors';
import connectDB from './database/db.config.js';
import routes from './routes/routes.js';

const app = express();

// Middleware

app.use(express.json());

var corsOptions = {
  origin: `${process.env.FRONTEND_URL }`, 
}
app.use(cors());







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
    console.log(`Server running on port http://localhost:${PORT}`)
  );
})();
