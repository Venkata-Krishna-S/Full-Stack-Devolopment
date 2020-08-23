const Logindetail = require("../models/logindetail.model.js");

// Create and Save a new Logindetail
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Logindetail
    const logindetail = new Logindetail({
        username: req.body.username,
        password: req.body.password
    });

    // Save Logindetail in the database
    Logindetail.create(logindetail, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Logindetail."
            });
        else res.send(data);
    });
};

// Retrieve all Logindetails from the database.
exports.findAll = (req, res) => {
    Logindetail.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving logindetails."
            });
        else res.send(data);
    });
};

// Find a single Logindetail with a logindetailId
exports.findOne = (req, res) => {
    Logindetail.findById(req.params.logindetailId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Logindetail with id ${req.params.logindetailId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Logindetail with id " + req.params.logindetailId
                });
            }
        } else res.send(data);
    });
};