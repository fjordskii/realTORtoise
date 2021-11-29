import styles from '../styles/PhoneNumberChip.module.css';

interface IPhoneNumberChipProps {
  phoneNumber: string;
  handleRemovePhone(e: any): void;
}

export function PhoneNumberChip({
  phoneNumber,
  handleRemovePhone,
}: IPhoneNumberChipProps) {
  return (
    <div className={styles.chip} onClick={handleRemovePhone}>
      {phoneNumber}
    </div>
  );
}
