import styles from '../styles/TextForm.module.css';
import { PhoneNumberChip } from './PhoneNumberChip';

interface IPhoneNumbers {
  handlePhoneChange(e: any): void;
  handleKeyDown(e: any): void;
  handleRemovePhone(e: any): void;
  phone: string;
  phoneNumbers: Array<string>;
}

export function PhoneNumbers({
  handlePhoneChange,
  handleRemovePhone,
  handleKeyDown,
  phone,
  phoneNumbers,
}: IPhoneNumbers) {
  return (
    <div className={styles.mb3}>
      <label htmlFor="phone" className={styles.label}>
        Phone Number
      </label>
      <br />
      <div className={styles.flexRowNoWrap}>
        <span className={styles.prefix}>+1</span>
        <input
          value={phone}
          onChange={handlePhoneChange}
          required
          className={(styles.mb3, styles.input)}
          onKeyDown={handleKeyDown}
          minLength={10}
          maxLength={10}
        />
      </div>
      <div className={styles.flexRow}>
        {phoneNumbers &&
          phoneNumbers.map((p) => (
            <PhoneNumberChip
              key={p}
              phoneNumber={p}
              handleRemovePhone={handleRemovePhone}
            />
          ))}
      </div>
    </div>
  );
}
