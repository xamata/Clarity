import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true, uinque: true },
    name: { type: String },
    role: { type: String, enum: ['teamMember', 'businessOwner'] },
    employeeRole: { type: String, enum: ['manager', 'receptionist', 'stylist'] },
    photoUrl: { type: String },
    phoneNumber: { type: String },
    preferences: {
        theme: { type: String },
        notifcations: { type: Boolean }
    },
    createdAt: { type: Date, default: Date.now },
    lastLoginAt: { type: Date },
    additionalData: { type: mongoose.Schema.Types.Mixed },
    permissions: [String]
});

const userModel = mongoose.model.user || mongoose.model('user', userSchema);

export default userModel;