import { useState } from "react";
import styles from "../styles/Home.module.css";

export interface ISmsFormPropTypes {
  loading: boolean;
  success: boolean;
  error: boolean;
  sendMessage: Function;
}

export function SmsForm({
  loading,
  success,
  error,
  sendMessage,
}: ISmsFormPropTypes) {
  const [phone, setPhone] = useState("18632215932");
  const [message, setMessage] = useState("this is a test");
  const [time, setTime] = useState(""); // runs as ISOString in Quirrel

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Send message</h1>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone Number</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          className={styles.input}
          required
        />
        <label htmlFor="time">Date & Time (military)</label>
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="i.e. November 20, 2021 13:15:00"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          required
          placeholder="Message"
          className={styles.textarea}
        ></textarea>
      </div>
      <button
        disabled={loading}
        onClick={() => sendMessage({ phone, message, time })}
        className={styles.button}
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
