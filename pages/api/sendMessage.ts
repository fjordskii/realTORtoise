import { NextApiRequest, NextApiResponse } from 'next';
import reminderQueue from './queues/sms';

export default async function sendMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, message, date } = req.body;

  try {
    const result = await reminderQueue.enqueue(
      { phone, message, date },
      {
        id: phone,
        runAt: new Date(date),
      }
    );
    return res.json({
      status: 200,
      data: { result, body: { phone, message, date } },
    });
  } catch (err) {
    res.json({ status: 400, detail: err });
  }
}
