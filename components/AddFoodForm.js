import { createFood } from "@/app/actions";
import styles from "@/styles/AddFoodForm.module.css";

const AddFoodForm = (props) => {
    return (
        <div className={styles['contained-container']}>
        <div className={styles.container}>
            <form action={createFood}>
            <h3>Add New Food</h3>
            <label htmlFor="foodName">Food Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" id="foodName" name="foodName" required/>
            <br/>
            <label htmlFor="numCals">Number of Calories:&nbsp;</label>
            <input type="number" step="any" id="numCals" name="numCals" required/>
            <br/>
            <input type="hidden" id="currentDate" name="currentDate" value={props.date}/>

            <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
};

export default AddFoodForm;