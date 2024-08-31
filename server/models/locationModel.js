const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
});

const LocationSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // Custom ID, if generated manually
    ownerId: { type: String, required: true, ref: 'BusinessOwner' }, // Reference to the BusinessOwner model
    address: { type: AddressSchema, required: true },
    services: [{ type: String, required: true }], // Array of service IDs
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
