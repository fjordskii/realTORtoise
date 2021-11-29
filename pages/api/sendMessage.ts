import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';
import { SYSTEM_FROM_NUMBER } from './queues/sms';

export default async function sendMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, message, date } = req.body;
  const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
  const token = <string>process.env.TWILIO_AUTH_TOKEN;

  const client = twilio(accountSid, token);

  try {
    client.messages
      .create({
        body: message,
        from: SYSTEM_FROM_NUMBER,
        to: phone,
      })
      .then((data) => console.log(data));
    // const result = await reminderQueue.enqueue(
    //   { phone, message, date },
    //   {
    //     id: phone,
    //     runAt: new Date(date),
    //   }
    // );
    // return res.json({
    //   status: 200,
    //   data: { result },
    // });
  } catch (err) {
    res.json({ status: 400, detail: err });
  }
}
