export interface SendEmailBody {
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

export type SendTextEmailConfig = {
  text: string;
};

export type SendHtmlEmailConfig = {
  html: string;
};

export type SendTemplateEmailConfig = {
  templateId: string;
};

interface SendTextEmailBody extends SendEmailBody {
  type: 'text';
  config: SendTextEmailConfig;
}

interface SendHtmlEmailBody extends SendEmailBody {
  type: 'html';
  config: SendHtmlEmailConfig;
}

interface SendTemplateEmailBody extends SendEmailBody {
  type: 'template';
  config: SendTemplateEmailConfig;
}
