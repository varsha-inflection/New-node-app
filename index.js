import express from 'express';
import { router } from './src/routes/user.route.js';
import { commentRouter } from './src/routes/comment.route.js';

const app = express();
const port = process.env.PORT || 5000;
app.use(router);
app.use(commentRouter);

app.listen(port, () => {
  console.log(`Service app is listening on port ${port}`);
});
