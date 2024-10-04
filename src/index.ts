import express, { Express, Request, Response } from 'express';

import { EmailController } from './api/email/email.controller';

const app: Express = express();

const PORT = process.env.PORT;

app.use(express.json({ limit: '50mb' }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).json('OK Version: v1.0.2');
});

app.post('/send-single-email', EmailController.sendSingleEmail);

app.get('*', function (req, res) {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
