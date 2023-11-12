"use server";
import mysql from "mysql2";
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
    
}

async function updateFood(data) {

}

async function deleteFood(data) {

}

async function getFoods(day) {
    const [results] = await pool.query("SELECT * FROM food_store_simple_calorie_tracker WHERE date = ?", [day]);
    return results;
}

export { createFood, updateFood, deleteFood, getFoods };