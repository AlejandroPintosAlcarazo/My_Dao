import styles from '../styles/DateDropdown.module.css';
import { useState } from 'react';

const DateDropdown = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className={styles.dateDropdown}>
      <label htmlFor="date-select" className={styles.label}>Select a date:</label>
      <select id="date-select" className={styles.select} value={selectedDate} onChange={handleDateChange}>
        <option value="">--Choose a date--</option>
        <option value="2024-07-01">July 1, 2024</option>
        <option value="2024-07-02">July 2, 2024</option>
        <option value="2024-07-03">July 3, 2024</option>
        <option value="2024-07-04">July 4, 2024</option>
        <option value="2024-07-05">July 5, 2024</option>
      </select>
    </div>
  );
};

export default DateDropdown;
