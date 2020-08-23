const sql = require('../models/db.js');

const Register = function (register) {
    this.username = register.username;
    this.password = register.password;
    this.email = register.email;
    this.number = register.number;
};

Register.create = (newRegister, result) => {
    sql.query(`insert into registers set ?`, newRegister, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log("Created Register : ", { id: res.insertedId, ...newRegister});
        return (null, { id: res.insertedId, ...newRegister });
    })
};

Register.findById = (registerId, result) => {
    sql.query(`select * from registers where Id = ${registerId}`, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Found Register:', res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: 'not_found' }, null);
    })
};

Register.getAll = result => {
    sql.query('select * from registers', (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log('Registers : ', res);
        result(null, res);
    })
};





module.exports = Register;