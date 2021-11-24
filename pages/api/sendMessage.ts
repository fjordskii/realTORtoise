import { NextApiRequest, NextApiResponse } from "next";
import reminderQueue from "./queues/sms";

export default async function sendMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, message, date } = req.body;
  console.log(phone, message, date);
  await reminderQueue.enqueue(
    { phone, message, date },
    {
      id: phone,
      runAt: new Date(date),
    }
  );
}
