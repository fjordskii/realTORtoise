import { ISendMessageParams } from '../pages';

type ISendMessage = ISendMessageParams & {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  phoneNumbers: Array<string>;
};

export const sendMessage = async ({
  phoneNumbers,
  message,
  date,
}: ISendMessage) => {
  Promise.all(
    phoneNumbers.map(async (phone: string) => {
      await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, message, date }),
      });
    })
  );
};
