"use client";
import styles from "@/styles/EditFoodModal.module.css";
import { updateFood } from "@/app/actions";
import { useState } from "react";
const EditFoodModal = (props) => {
    const [newFoodName, setNewFoodName] = useState(props.foodName);
    const [newNumCals, setNewNumCals] = useState(props.numCals);
    const [modalOpen, setModalOpen] = useState(true);
  
    const handleSave = async () => {
      console.log('New Food Name:', newFoodName);
      console.log('New Food Calories:', newNumCals);
      console.log('hi the id is', props.id);
      await updateFood(props.id, newFoodName, newNumCals, props.date);
      props.onClose();
    };
    return (
        <div className={styles["modal-overlay"]} onClick={() => setModalOpen(false)}>
            <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
                <span className={styles["close-button"]} onClick={props.onClose}>X</span>
                <label className={styles['my-label']} htmlFor="newFoodName">New Food Name</label>
                <input className={styles['my-input']}
                id="newFoodName"
                type="text"
                placeholder={props.foodName}
                value={newFoodName}
                onChange={(e) => setNewFoodName(e.target.value)}
                />
                <label className={styles['my-label']} htmlFor="newNumCals">New Food Calories</label>
                <input className={styles['my-input']}
                id="newNumCals"
                type="number"
                placeholder={props.numCals}
                value={newNumCals}
                onChange={(e) => setNewNumCals(e.target.value)}
                />
                <button className={styles['my-button']} onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default EditFoodModal;