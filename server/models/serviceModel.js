const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true }, // Duration in minutes
    price: { type: Number, required: true }, // Price in currency unit, e.g., USD
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;
