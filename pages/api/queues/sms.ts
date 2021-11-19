import { Queue } from "quirrel/next";
import twilio from "twilio";
import { ISendMessageParams } from "../..";

export default Queue(
  "api/queues/sms", // the route it's reachable under
  async ({ message, phone }: ISendMessageParams) => {
    const accountSid = <string>process.env.TWILIO_ACCOUNT_SID;
    const token = <string>process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, token);

    client.messages
      .create({
        body: message,
        from: "14784002362",
        to: phone,
      })
      .catch((err) => console.error(err));
  }
);
