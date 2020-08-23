const Register = require("../models/register.model.js");

// Create and Save a new Register
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Register
    const register = new Register({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        number: req.body.number
    });

    // Save Register in the database
    Register.create(register, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Register."
            });
        else res.send(data);
    });
};

// Retrieve all Registers from the database.
exports.findAll = (req, res) => {
    Register.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving registers."
            });
        else res.send(data);
    });
};

// Find a single Register with a registerId
exports.findOne = (req, res) => {
    Register.findById(req.params.registerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Register with id ${req.params.registerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Register with id " + req.params.registerId
                });
            }
        } else res.send(data);
    });
};