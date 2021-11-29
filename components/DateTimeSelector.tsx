import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/TextForm.module.css';

interface IDateTimeSelector {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export function DateTimeSelector({ date, setDate }: IDateTimeSelector) {
  return (
    <>
      {' '}
      <label htmlFor="time" className={styles.label}>
        Date & Time (EST)
      </label>
      <DatePicker
        className={styles.mb3}
        selected={date}
        onChange={(date: any) => setDate(date)}
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
      />
    </>
  );
}
