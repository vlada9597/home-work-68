import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017/testdb';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Вітаю! Express з Docker та MongoDB працює!');
});

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB підключено'))
  .catch(err => console.error('Помилка підключення до MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
