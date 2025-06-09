import mysql from "mysql2";

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise()

  export async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM user")
  return rows
  }

  export async function getUser(id) {
    const [rows] = await pool.query(`
      SELECT *
      FROM user
      WHERE user_id = ?`, [id])
      return rows[0]
  }

  export async function getByUsername(username) {
    const [rows] = await pool.query(`
      SELECT *
      FROM user
      WHERE username = ?`, [username])
      return rows[0]
  }

  export async function comparePassword(user,pw) {
    const [rows] = await pool.query(`
      SELECT password
      FROM user
      WHERE username = ?`, [user])
      console.log(rows.length)
      if(rows.length < 1)
      {
        return false;

      }
      if(rows[0]?.password === pw)
      {
        return true
      }
      else
      {
        return false
      }
  }

  export async function saveUser(id, username, password) {
    await pool.query(`
      UPDATE user
      SET username = ?, password = ?
      WHERE user_id = ?`, [username,password, id])
  }

  export async function createUser(username, password, user_type, salt) {
    const [rows] = await pool.query(`
      INSERT INTO user (username, password, user_type, salt)
      VALUES (?, ?, ?, ?)`,
    [username, password, user_type, salt])
    return rows[0]
  }

  export async function deleteUser(id) {
    const [rows] = await pool.query(`
      DELETE FROM user WHERE user_id = ?`,
    [id])
    return rows[0]
  }

  export async function getAllCollections(id) {
    const [rows] = await pool.query("SELECT * FROM collection WHERE user_id = ?", [id])
    return rows
  }

  export async function getCollection(id) {
    const [rows] = await pool.query("SELECT * FROM collection WHERE collection_id = ? ", [id])
    return rows[0]  
  }

  export async function createCollection(id, name) {
    await pool.query(`
      INSERT INTO collection (user_id, collection_name)
      VALUES (?, ?)`,
    [id, name])
  }

  export async function editCollection(id, name,desc,img) {
    await pool.query(`
      UPDATE collection
      SET name ?, image ?
      WHERE collection_id = ?`, [name,img,id])
  }

  export async function deleteCollection(id) {
    await pool.query(`
      DELETE FROM item WHERE collection_id =?`, [id])
    await pool.query(`
      DELETE FROM collection WHERE collection_id =?`, [id])
  }

  export async function getItems(id) {
    const [rows] = await pool.query("SELECT * FROM item WHERE collection_id = ?", [id])
    return rows;
  }

  export async function getItem(id) {
    const [rows] = await pool.query("SELECT * FROM item WHERE item_id = ?", [id])
    return rows[0]
  }

  export async function editItem(id, name, desc) {
    await pool.query(`
      UPDATE item
      SET item_name = ?, item_desc = ?
      WHERE item_id = ?`, [name,desc,id])
  }

  export async function createItem(id, name, desc, image) {
    await pool.query(`
      INSERT INTO item (collection_id, item_name, item_desc, item_image)
      VALUES (?, ?, ?, ?)`,
    [id, name, desc, image])
  }

    export async function deleteItem(id) {
    await pool.query(`
      DELETE FROM item WHERE item_id =?`, [id])
  }