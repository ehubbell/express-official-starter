import express from 'express';
import '../db/database';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on: http://localhost:${port}`);

export default app;