import styles from '../styles/TextForm.module.css';

interface ITextMessage {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export function TextMessage({ message, setMessage }: ITextMessage) {
  return (
    <>
      <label htmlFor="message" className={styles.label}>
        Message
      </label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id="message"
        required
        placeholder="Message"
        className={(styles.outlineBlack, styles.mb3)}
      ></textarea>
    </>
  );
}
