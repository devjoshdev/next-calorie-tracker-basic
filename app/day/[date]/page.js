import Link from "next/link";
import MyDatePicker from "@/components/MyDatePicker";
import DateBar from "@/components/DateBar";
import FoodList from "@/components/FoodList";
import { getFoods } from "@/app/actions";
const validateYear = (year) => {
    return (Number.parseInt(year) && (Number.parseInt(year) >= 1980));
};
const validateMonth = (month) => {
    return (Number.parseInt(month) && (Number.parseInt(month) > 0 && Number.parseInt(month) < 13));
};
const validateDay = (day) => {
    return (Number.parseInt(day) && (Number.parseInt(day) > 0 && Number.parseInt(day) < 32));
};

export default async function Day(props) {
    const dateRegEx = new RegExp("^\\d{4}-\\d{2}-\\d{2}$");
    const focusedDate = props.params.date;
    const [focusedYear, focusedMonth, focusedDay] = focusedDate.split("-");
    console.log(focusedDate);
    const foodListJSON = await getFoods(focusedDate);
    console.log(foodListJSON);
    let foodListData = [];
    if (foodListJSON.length !== 0) {
        foodListData = foodListJSON[0].foods;
    }
    
    if (dateRegEx.test(focusedDate) && validateYear(focusedYear) && validateMonth(focusedMonth) && validateDay(focusedDay)) {
        return (
            <div>
                <MyDatePicker currentDate={focusedDate}/>
                <DateBar currentDate={focusedDate}/>
                <FoodList foods={foodListData}/>
            </div>
        );
    }
    return (
        <div>
            <h1 style={{textAlign: "center", paddingTop: "20px",}}>NO PAGE FOUND :scream:</h1>
            <h3 style={{textAlign: "center", paddingTop: "20px",}}>Return to <Link href="/">home page</Link></h3>
        </div>
    );
    
}