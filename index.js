import express from 'express';
import { router } from './src/routes/user.route.js';

const app = express();
const port = process.env.PORT || 5000;
app.use(router);

app.listen(port, () => {
  console.log(`Service app is listening on port ${port}`);
});
