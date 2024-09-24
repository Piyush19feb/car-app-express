import express from 'express';
import carRoutes from './routes/carRoutes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// routes
app.use('/api', carRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
