import Link from "next/link";
import MyDatePicker from "@/components/MyDatePicker";
import DateBar from "@/components/DateBar";
import Food from "@/components/Food";
const validateYear = (year) => {
    return (Number.parseInt(year) && (Number.parseInt(year) >= 1980));
};
const validateMonth = (month) => {
    return (Number.parseInt(month) && (Number.parseInt(month) > 0 && Number.parseInt(month) < 13));
};
const validateDay = (day) => {
    return (Number.parseInt(day) && (Number.parseInt(day) > 0 && Number.parseInt(day) < 32));
};
export default function Day(props) {
    const dateRegEx = new RegExp("^\\d{4}-\\d{2}-\\d{2}$");
    const focusedDate = props.params.date;
    const [focusedYear, focusedMonth, focusedDay] = focusedDate.split("-");
    console.log(focusedDate);
    if (dateRegEx.test(focusedDate) && validateYear(focusedYear) && validateMonth(focusedMonth) && validateDay(focusedDay)) {
        return (
            <div>
                <MyDatePicker currentDate={focusedDate}/>
                <DateBar currentDate={focusedDate}/>
                <Food foodName="Cheeseburger" numCals={650} />
                <h1>Date: {focusedDate}</h1>
                {`<h1>Hi</h1>`}
                <svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-47.62 -47.62 571.45 571.45" xmlSpace="preserve" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon> </g></svg>
                <svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-47.62 -47.62 571.45 571.45" xmlSpace="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="6.666982000000002"></g><g id="SVGRepo_iconCarrier"> <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "></polygon> </g></svg>
                <pre>
                    Love,
    
    
                      Joshy
    
                </pre>
            </div>
        );
    }
    return (
        <div>
            <h1 style={{textAlign: "center", paddingTop: "20px",}}>NO PAGE FOUND 😱</h1>
            <h3 style={{textAlign: "center", paddingTop: "20px",}}>Return to <Link href="/">home page</Link></h3>
        </div>
    );
    
}