// import AWS from '@aws-sdk/client-s3';

import { EmailBody, SendTextEmailBody } from '~/core/interfaces/type';

// AWS.config.update({ region: 'Europe' });

// const SENDER_EMAIL_ADDRESS = process.env.SENDER_EMAIL_ADDRESS;

export class EmailService {
  constructor() {}

  public sendEmail(body: EmailBody) {
    switch (body.type) {
      case 'text':
        this.sendTextEmail(body);
      case 'html':
      // console.log((body.config as SendHtmlEmailConfig).html);
      case 'template':
      // const template = (body.config as SendTemplateEmailConfig).templateId;
    }
  }

  protected sendTextEmail(body: SendTextEmailBody) {
    console.log(body);
    // const params = {
    //   Destination: {
    //     ToAddresses: typeof body.to === 'string' ? [body.to] : body.to,
    //   },
    //   Message: {
    //     Body: {
    //       Text: {
    //         Charset: 'UTF-8',
    //         Data: body.config.text,
    //       },
    //     },
    //     Subject: {
    //       Charset: 'UTF-8',
    //       Data: body?.subject ?? 'No subject',
    //     },
    //   },
    //   Source: SENDER_EMAIL_ADDRESS as string,
    // };
    //
    // const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
    //
    // sendPromise
    //   .then(function (data) {
    //     console.log(data.MessageId, data, 'success');
    //   })
    //   .catch(function (err) {
    //     console.error(err, err.stack, 'error');
    //   });
  }
}
