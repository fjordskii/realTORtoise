import React, { useMemo, useState } from 'react';
import styles from '../styles/TextForm.module.css';
import { sendMessage } from '../utils/utils';
import { DateTimeSelector } from './DateTimeSelector';
import { PhoneNumbers } from './PhoneNumbers';
import { SelectCountry } from './SelectCountry';
import { TextMessage } from './TextMessage';

export function TextForm() {
  const [phone, setPhone] = useState('8632215932');
  const [message, setMessage] = useState('this is a test');
  const [date, setDate] = useState(new Date()); // runs as ISOString in Quirrel
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState<any[]>([]);

  const computedDate = useMemo(() => date.toString(), [date]);

  const handlePhoneChange = (e: any): void => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };

  const handleRemovePhone = (e: any): void => {
    const _p = e.target.innerText;
    setPhoneNumbers((phoneNumbers) =>
      [...phoneNumbers].filter((phone) => phone !== _p)
    );
  };

  const handleKeyDown = (e: any): void => {
    const _phone = e.target.value;

    if (_phone.length < 10) {
      return;
    }

    const hasMatch = phoneNumbers.some((p) => p === '1' + _phone);

    if (hasMatch) {
      return;
    }

    if (e.key === 'Enter') {
      const _phone = '1' + phone;
      setPhoneNumbers((phoneNumbers) => [...phoneNumbers, _phone]);
      setPhone('');
    }
  };

  return (
    <div className={styles.form}>
      <div className="logo terminal-prompt">
        <span>Send 🐢 SMS</span>
      </div>
      <hr />
      {/* Select Country  */}
      <SelectCountry />

      {/* Phone Numbers */}
      <PhoneNumbers
        handlePhoneChange={handlePhoneChange}
        handleKeyDown={handleKeyDown}
        phone={phone}
        phoneNumbers={phoneNumbers}
        handleRemovePhone={handleRemovePhone}
      />
      {/* Date and Time */}
      <DateTimeSelector date={date} setDate={setDate} />
      {/* Message */}
      <TextMessage message={message} setMessage={setMessage} />
      <div className={styles.flexColumn}>
        <h6>the message will be sent at:</h6>
        <div className="terminal-alert terminal-alert terminal-alert-primary">
          <h6> {computedDate}</h6>
        </div>
      </div>
      <button
        style={{ zIndex: '0' }}
        className="btn btn-primary btn-block"
        disabled={loading}
        onClick={() =>
          sendMessage({
            phone,
            message,
            date: computedDate,
            setError,
            setLoading,
            setSuccess,
          })
        }
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
