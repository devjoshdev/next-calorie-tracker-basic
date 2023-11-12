import Food from "./Food";
import styles from "@/styles/FoodList.module.css";
const FoodList = (props) => {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["foodlist-container"]}>
                {props.foods.map(food => <Food key={food.id} foodName={food.name} numCals={food.calories}/>)}
            </div>
        </div>
    )
}

export default FoodList;