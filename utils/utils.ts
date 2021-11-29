import { ISendMessageParams } from '../pages';

type ISendMessage = ISendMessageParams & {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export const sendMessage = async ({
  phone,
  message,
  date,
  setLoading,
  setError,
  setSuccess,
}: ISendMessage) => {
  setLoading(true);
  setError(false);
  setSuccess(false);

  const res = await fetch('/api/sendMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone, message, date }),
  });
  const apiResponse = await res.json();

  if (apiResponse.success) {
    setSuccess(true);
  } else {
    setError(true);
  }
  setLoading(false);
};
