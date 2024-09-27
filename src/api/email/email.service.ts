import { EmailBody } from "../../core/interfaces/type";

export class EmailService {
  constructor() {}

  public sendEmail(body: EmailBody) {
    switch (body.type) {
      case 'text':
        console.log(body.config.text)
      case 'html':
        console.log(body.config.)
      case 'template':
        const template = (config as SendTemplateEmailConfig).templateId;
    }
  }
}