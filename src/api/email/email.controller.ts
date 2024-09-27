import { Request, Response } from 'express';

import { EmailService } from './email.service';

export class EmailController {
  static sendSingleEmail(req: Request, res: Response) {
    const body = req.body as EmailBody;

    try {
      const emailService = new EmailService();
      emailService.sendEmail(req.body);

      res.status(200).json('Body received');
    } catch (e) {
      console.warn(e);
      res.status(500).json(e);
    }
  }
}
