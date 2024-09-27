import express, { Express, NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

import { EmailController } from './api/email/email.controller';
import { emailSchemas } from './api/schemas/emailSchemas';

import {
  EmailBody,
  SendEmailBody,
  SendHtmlEmailConfig,
  SendTemplateEmailConfig,
  SendTextEmailConfig,
} from '~/core/interfaces/type';

const app: Express = express();

const PORT = process.env.PORT;

app.use(express.json({ limit: '50mb' }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).json('OK');
});

const validate =
  (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

app.post(
  '/send-single-email',
  [validate(emailSchemas)],
  EmailController.sendSingleEmail,
);

app.get('*', function (req, res) {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
