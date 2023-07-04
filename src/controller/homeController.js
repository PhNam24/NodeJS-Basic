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

module.exports = {
    getHomepage, getDetailPage, createNewUser
}
