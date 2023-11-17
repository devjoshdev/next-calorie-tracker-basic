"use server";
import mysql from "mysql2";
import { revalidatePath } from "next/cache";
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
}).promise();
async function createFood(data) {
    const foodName = data.get("foodName");
    const numCals = data.get("numCals");
    const currentDate = data.get("currentDate");
    const [rows, fields] = await pool.query("INSERT INTO food_store_simple_calorie_tracker (food_name, calories, date) VALUES (?, ?, ?)", [foodName, numCals, currentDate]);
    console.log(rows);
    revalidatePath(`/day/${currentDate}`);
}

async function updateFood(id, newName, newCalories, currentDate) {
    const [rows, fields] = await pool.query("UPDATE food_store_simple_calorie_tracker SET food_name = ?, calories = ? WHERE id = ?", [newName, newCalories, id]);
    revalidatePath(`/day/${currentDate}`);

}

async function deleteFood(id, currentDate) {
    const [rows, fields] = await pool.query("DELETE FROM food_store_simple_calorie_tracker WHERE id = ?", [id]);
    revalidatePath(`/day/${currentDate}`);
}
async function getFoods(day) {
    const [results] = await pool.query("SELECT * FROM food_store_simple_calorie_tracker WHERE date = ?", [day]);
    return results;
}

export { createFood, updateFood, deleteFood, getFoods };