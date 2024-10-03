import { Request, Response } from 'express';

import { EmailService } from './email.service';

import { EmailBody } from '~/core/interfaces/type';
import { validateSchema } from '../../shared/utils';
import { emailSchema } from './emailSchema';

export class EmailController {
  static async sendSingleEmail(req: Request, res: Response) {
    const body = req.body as EmailBody;

    const error = await validateSchema(emailSchema)(req);

    if (error) {
      return res.status(400).json(error);
    }

    try {
      const emailService = new EmailService();
      emailService.sendEmail(body);

      return res.status(200).json('Body received');
    } catch (e) {
      console.warn(e);
      return res.status(500).json(e);
    }
  }
}
