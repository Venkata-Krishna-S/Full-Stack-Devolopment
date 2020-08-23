const sql = require('../models/db.js');

const Logindetail = function (logindetail) {
    this.username = logindetail.username;
    this.password = logindetail.password;
};

Logindetail.create = (newLogindetail, result) => {
    sql.query(`insert into logindetails set ?`, newLogindetail, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log("Created Logindetail : ", { id: res.insertedId, ...newLogindetail});
        return (null, { id: res.insertedId, ...newLogindetail });
    })
};

Logindetail.findById = (logindetailId, result) => {
    sql.query(`select * from logindetails where Id = ${logindetailId}`, (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Found Logindetail:', res[0]);
            result(null, res[0]);
            return;
        }
        result({ kind: 'not_found' }, null);
    })
};

Logindetail.getAll = result => {
    sql.query('select * from logindetails', (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log('Logindetails : ', res);
        result(null, res);
    })
};





module.exports = Logindetail;