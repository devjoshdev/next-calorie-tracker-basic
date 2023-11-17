import Food from "./Food";
import styles from "@/styles/FoodList.module.css";
const FoodList = (props) => {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["foodlist-container"]}>
                {props.foods.map(food => <Food key={food.id} id={food.id} foodName={food['food_name']} numCals={food.calories} date={props.currentDate}/>)}
            </div>
        </div>
    )
}

export default FoodList;