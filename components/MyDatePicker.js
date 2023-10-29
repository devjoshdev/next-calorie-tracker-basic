'use client';
import styles from "./MyDatePicker.module.css";
import DatePicker from "react-datepicker";
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
const MyDatePicker = (props) => {
    return (
        <div style={containerStyle}>
            <div style={datePickerDivStyle}>
                <p>Choose a Date (YYYY-MM-DD)</p>
                <DatePicker showIcon className={styles['react-datepicker-wrapper']}/>
            </div>
        </div>


    )
    

}

export default MyDatePicker;