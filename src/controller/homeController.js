import { response } from "express";
import pool from "../configs/connectDataBase";

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index.ejs', { dataUsers: rows })
}

let getDetailPage = async (req, res) => {
    let id = req.params.userID;
    let [user] = await pool.execute('SELECT * FROM `users` WHERE `id` = ?', [id]);
    return res.send(JSON.stringify(user));
}
let createNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;
    await pool.execute(`INSERT INTO users(firstName, lastName, email, address) 
    VALUES(?, ?, ?, ?)` , [firstName, lastName, email, address]);
    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    let {id} = req.body;
    await pool.execute(`DELETE FROM users WHERE id = ?`, [id]);
    return res.redirect('/');
}

let editUser = async (req, res) => {
    let id = req.params.userID;
    let [user] = await pool.execute('SELECT * FROM `users` WHERE `id` = ?', [id]);
    return res.render('editUser.ejs', {user: user[0]});
}

let updateUser = async (req, res) => {
    let {id, firstName, lastName, email, address} = req.body;
    await pool.execute(`UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ?
    WHERE id =?`, [firstName, lastName, email, address, id]);
    return res.redirect('/');
}

let uploadPage = async (req, res) => {
    return res.render('uploadPage.ejs');
}

let uploadFile = async (req, res) => {
    return res.send('hello');
}

module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, editUser, updateUser, uploadPage, uploadFile
}
