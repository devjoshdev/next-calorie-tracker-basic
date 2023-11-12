import Link from "next/link";
import MyDatePicker from "@/components/MyDatePicker";
import DateBar from "@/components/DateBar";
import Food from "@/components/Food";
import FoodList from "@/components/FoodList";
const validateYear = (year) => {
    return (Number.parseInt(year) && (Number.parseInt(year) >= 1980));
};
const validateMonth = (month) => {
    return (Number.parseInt(month) && (Number.parseInt(month) > 0 && Number.parseInt(month) < 13));
};
const validateDay = (day) => {
    return (Number.parseInt(day) && (Number.parseInt(day) > 0 && Number.parseInt(day) < 32));
};
const getFoodList = async (date) => {
    const res = await fetch(`http://localhost:3001/days?date=${date}`, {cache: "no-store"});
    if (!res.ok) throw new Error("Could not grab the data");
    return res.json();
};
export default async function Day(props) {
    const dateRegEx = new RegExp("^\\d{4}-\\d{2}-\\d{2}$");
    const focusedDate = props.params.date;
    const [focusedYear, focusedMonth, focusedDay] = focusedDate.split("-");
    console.log(focusedDate);
    const foodListJSON = await getFoodList(focusedDate);
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
                {/* <Food foodName="Cheeseburger" numCals={650} />
                <Food foodName="Side of Queso" numCals={150}/>
                <Food foodName="Oatmeal" numCals={400}/> */}
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