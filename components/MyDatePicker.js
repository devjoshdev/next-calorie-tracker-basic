'use client';
import styles from "../styles/MyDatePicker.module.css";
import DatePicker from "react-datepicker";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'react-datepicker/dist/react-datepicker.css';
const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

};
const datePickerDivStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid black',
    width: '40%',
    paddingBottom: '10px',
    paddingLeft: '10px',
}
const MyDatePicker = ({currentDate}) => {
    const [dateToPush, setDateToPush] = useState(currentDate);
    const [myDate, setMyDate] = useState(new Date(currentDate));
    const { push } = useRouter();
    useEffect(() => {
        push(`/day/${dateToPush}`);
    }, [dateToPush]);
    return (
        <div style={containerStyle}>
            <div style={datePickerDivStyle}>
                <p>Choose a Date</p>
                <DatePicker
                selected={new Date(currentDate).getTime() + 24 * 60 * 60 * 1000} 
                    showIcon
                    dateFormat="yyyy-MM-dd" 
                    className={styles['react-datepicker-wrapper']} 
                    onChange={(d) => {
                        const year = d.getFullYear();
                        const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
                        const day = String(d.getDate()).padStart(2, '0');
                        const formattedDate = `${year}-${month}-${day}`;
                        setDateToPush(formattedDate);
                        }}
                    onKeyDown={e => e.preventDefault()}
                        />                        
            </div>
        </div>


    )
    

}

export default MyDatePicker;