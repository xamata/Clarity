const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
});

const BusinessOwnerSchema = new mongoose.Schema({
    firebaseUID: { type: String, required: true },
    businessName: { type: String, required: true },
    businessLogo: { type: String },
    address: { type: AddressSchema, required: true },
    locations: [{ type: String }], // Array of location IDs
});

const BusinessOwner = mongoose.model('BusinessOwner', BusinessOwnerSchema);

module.exports = BusinessOwner;
