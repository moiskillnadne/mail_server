import { z } from 'zod';

const EmailTypeSchema = z.enum(['text', 'html', 'template']);

const SendTextEmailConfigSchema = z.object({
  text: z.string(),
});

const SendHtmlEmailConfigSchema = z.object({
  html: z.string(),
});

const SendTemplateEmailConfigSchema = z.object({
  templateId: z.string(),
});

export const emailSchema = z.object({
  body: z
    .object({
      to: z.union([z.string().email(), z.array(z.string().email())]),
      subject: z.string().nullable(),
      type: EmailTypeSchema,
      config: z.record(z.any()),
    })
    .superRefine((data, ctx) => {
      if (data.type === 'text') {
        const result = SendTextEmailConfigSchema.safeParse(data.config);
        if (!result.success) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: result.error.message,
            path: ['config'],
          });
        }
      } else if (data.type === 'html') {
        const result = SendHtmlEmailConfigSchema.safeParse(data.config);
        if (!result.success) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: result.error.message,
            path: ['config'],
          });
        }
      } else if (data.type === 'template') {
        const result = SendTemplateEmailConfigSchema.safeParse(data.config);
        if (!result.success) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: result.error.message,
            path: ['config'],
          });
        }
      }
    }),
});
