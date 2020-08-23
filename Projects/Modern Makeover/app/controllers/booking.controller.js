const Booking = require("../models/booking.model.js");

// Create and Save a new Register
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Register
    const booking = new Booking({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        specification: req.body.specification,
        address: req.body.address
    });

    // Save Register in the database
    Booking.create(booking, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Booking."
            });
        else res.send(data);
    });
};

// Retrieve all Registers from the database.
exports.findAll = (req, res) => {
    Booking.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving bookings."
            });
        else res.send(data);
    });
};

// Find a single Register with a registerId
exports.findOne = (req, res) => {
    Booking.findById(req.params.bookingId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Booking with id ${req.params.bookingId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Booking with id " + req.params.bookingId
                });
            }
        } else res.send(data);
    });
};