import pool from "../configs/connectDataBase";

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users')
    return res.status(200).json({
        data: rows
    });
}

let createUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;

    if(!firstName || !lastName || !email || !address){
        return res.status(200).json({
            error: 'Missing Information!'
        });
    }

    await pool.execute(`INSERT INTO users(firstName, lastName, email, address) 
    VALUES(?, ?, ?, ?)` , [firstName, lastName, email, address]);
     return res.status(200).json({
        message: 'User Created'
    });
}

let updateUser = async (req, res) => {
    let {id, firstName, lastName, email, address} = req.body;

    if(!id || !firstName || !lastName || !email || !address){
        return res.status(200).json({
            error: 'Missing Information!'
        });
    }

    await pool.execute(`UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ?
    WHERE id =?`, [firstName, lastName, email, address, id]);
    return res.status(200).json({
        message: 'User Updated'
    })
}


let deleteUser = async (req, res) => {
    let id = req.params.userID;
    if(!id){
        return res.status(200).json({
            error: 'User is not exist'
        })
    }

    await pool.execute(`DELETE FROM users WHERE id = ?`, [id]);
    return res.status(200).json({
        message: 'User Deleted'
    })
}

module.exports = {
    getAllUsers, createUser, updateUser, deleteUser
}