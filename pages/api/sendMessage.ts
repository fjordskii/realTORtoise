import { NextApiRequest, NextApiResponse } from "next";
import reminderQueue from "./queues/sms";

export default async function sendMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, message, time } = req.body;

  await reminderQueue.enqueue(
    { phone, message, time },
    {
      id: phone,
      runAt: new Date(time),
    }
  );
}
