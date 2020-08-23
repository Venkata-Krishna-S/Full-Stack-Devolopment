module.exports = app =>{
    const registers = require('../controllers/register.controller.js');

    //create a new register
    app.post ("/registers",registers.create);
    //retrieve all the users
    app.get('/registers',registers.findAll);
    //single user
    app.get('/registers/:registerId',registers.findOne);
}