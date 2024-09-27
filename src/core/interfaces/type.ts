interface SendEmailBody {
  to: string | string[];
  subject: string | null;
  type: SendEmailType;
  config: SendEmailConfig;
}

type SendEmailType = 'text' | 'html' | 'template';

type SendEmailConfig =
  | SendTextEmailConfig
  | SendHtmlEmailConfig
  | SendTemplateEmailConfig;

interface SendTextEmailConfig {
  text: string;
}

interface SendHtmlEmailConfig {
  html: string;
}

interface SendTemplateEmailConfig {
  templateId: string;
}

export interface SendTextEmailBody extends SendEmailBody {
  type: 'text';
  config: SendTextEmailConfig;
}

export interface SendHtmlEmailBody extends SendEmailBody {
  type: 'html';
  config: SendHtmlEmailConfig;
}

export interface SendTemplateEmailBody extends SendEmailBody {
  type: 'template';
  config: SendTemplateEmailConfig;
}
