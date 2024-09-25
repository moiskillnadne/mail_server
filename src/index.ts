import express, { Express, NextFunction, Request, Response } from 'express';
import {
  SendEmailBody,
  SendHtmlEmailConfig,
  SendTemplateEmailConfig,
  SendTextEmailConfig,
} from '~/core/interfaces/type';
import { emailSchemas } from './api/schemas/emailSchemas';
import { ZodSchema } from 'zod';

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
  (req: Request, res: Response) => {
    const body: SendEmailBody = req.body;

    try {
      const { to, subject, type, config } = body;

      switch (type) {
        case 'text':
          const text = (config as SendTextEmailConfig).text;
        case 'html':
          const html = (config as SendHtmlEmailConfig).html;
        case 'template':
          const template = (config as SendTemplateEmailConfig).templateId;
      }

      res.status(200).json('Body received');
    } catch (e) {
      console.warn(e);
      res.status(500).json(e);
    }
  },
);

app.get('*', function (req, res) {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
