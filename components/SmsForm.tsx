import { Input, Tag, Textarea } from "@chakra-ui/react";
import { useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import { ISendMessageParams } from "../pages";
import styles from "../styles/SMSForm.module.css";

export function SmsForm() {
  const [phone, setPhone] = useState("18632215932");
  const [message, setMessage] = useState("this is a test");
  const [date, setDate] = useState(new Date()); // runs as ISOString in Quirrel
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const dateRef = useRef<DatePicker>();

  const computedDate = useMemo(() => date.toString(), [date]);

  const sendMessage = async ({ phone, message, date }: ISendMessageParams) => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    const res = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Send 🐢 SMS</h1>
      <hr className={styles.divider} />
      <label htmlFor="phone" className={styles.label}>
        Phone Number
      </label>
      <Input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        variant="outline"
        size="lg"
        className={styles.mb3}
      />
      <label htmlFor="time" className={styles.label}>
        Date & Time (EST)
      </label>

      <DatePicker
        className={styles.mb3}
        selected={date}
        showTimeSelect
        onChange={(date: any) => setDate(date)}
      />

      <label htmlFor="message" className={styles.label}>
        Message
      </label>
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id="message"
        required
        placeholder="Message"
        className={(styles.outlineBlack, styles.mb3)}
      ></Textarea>
      <Tag
        variant="outline"
        size="sm"
        colorScheme="gray"
        className={styles.mb3}
      >
        {computedDate}
      </Tag>
      <button
        style={{ zIndex: "0" }}
        className="btn btn-primary btn-block"
        disabled={loading}
        onClick={() => sendMessage({ phone, message, date: computedDate })}
      >
        Send Message
      </button>

      {success && <p className={styles.success}>Message sent successfully.</p>}
      {error && (
        <p className={styles.error}>
          Something went wrong. Please check the number.
        </p>
      )}
    </div>
  );
}
