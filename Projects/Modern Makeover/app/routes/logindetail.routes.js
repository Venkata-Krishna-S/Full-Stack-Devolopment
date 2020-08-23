module.exports = app =>{
    const logindetails = require('../controllers/logindetail.controller.js');

    //create a new logindetail
    app.post ("/logindetails",logindetails.create);
    //retrieve all the users
    app.get('/logindetails',logindetails.findAll);
    //single user
    app.get('/logindetails/:logindetailId',logindetails.findOne);
}