import styles from "@/styles/DateBar.module.css";
import Link from "next/link";
const DateBar = ({currentDate}) => {
    const changeDay = (inputDate, direction) => {
        // courtesy of chatgpt + me
        const [year, month, day] = inputDate.split('-');
        const currentDate = new Date(year, month - 1, day); // Month is zero-based
        let nextDate;
        if (direction === "+") {
             nextDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
        }
        else {
            nextDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
        }

        // Format the next date as "yyyy-mm-dd"
        const nextYear = nextDate.getFullYear();
        const nextMonth = String(nextDate.getMonth() + 1).padStart(2, '0');
        const nextDay = String(nextDate.getDate()).padStart(2, '0');

        return `${nextYear}-${nextMonth}-${nextDay}`;
    };
    return (
        <div className={styles.container}>
            <div className={styles.datebar}>
                <Link href={`/day/${changeDay(currentDate, "-")}`} className={styles.arrow} prefetch={false}><svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-47.62 -47.62 571.45 571.45" xmlSpace="preserve" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon> </g></svg></Link>
                <h3 className={styles.date}>Date: {currentDate}</h3>
                <Link href={`/day/${changeDay(currentDate, "+")}`} className={styles.arrow}><svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-47.62 -47.62 571.45 571.45" xmlSpace="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="6.666982000000002"></g><g id="SVGRepo_iconCarrier"> <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon> </g></svg></Link>
            </div>
        </div>
    );
}

export default DateBar;