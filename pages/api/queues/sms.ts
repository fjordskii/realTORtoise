import { Queue } from 'quirrel/next';
import twilio from 'twilio';
import { ISendMessageParams } from '../..';

export const SYSTEM_FROM_NUMBER = '17659785056';

export default Queue(
  'api/queues/sms',
  async ({ message, phone }: ISendMessageParams) => {
    const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
    const token = <string>process.env.TWILIO_AUTH_TOKEN;

    const client = twilio(accountSid, token);

    await client.messages.create({
      body: message,
      from: SYSTEM_FROM_NUMBER,
      to: phone,
    });
  }
);
