import { NextApiRequest } from 'next';
import reminderQueue from './queues/sms';

export default async function sendMessage(req: NextApiRequest) {
  const { phone, message, date } = req.body;

  await reminderQueue.enqueue(
    { phone, message, date },
    {
      id: phone,
      runAt: new Date(date),
    }
  );
}
