import admin from "firebase-admin";
import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        const { email, password, displayName, ...rest } = req.body;

        // 1. Create user in Firebase Authentication
        const userRecord = await admin.auth().createUser({
            email,
            password,
            displayName,
        });

        // 2. Create user in MongoDB (using User model)
        const user = new userModel({
            uid: userRecord.uid,
            email,
            displayName,
        });
        await user.save();

        res.status(201).json({ message: 'User created successfully', userId: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating user' });
    }
};

export const getUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        // 1. Check if user exists in Firebase Authentication (optional)
        // const userRecord = await admin.auth().getUser(userId); // Optional check

        // 2. Find user in MongoDB (using User model)
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching user' });
    }
};

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedData = req.body;

        // 1. Update user in MongoDB (using User model)
        const user = await userModel.findByIdAndUpdate(userId, updatedData, { new: true });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating user' });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        // 1. Delete user from MongoDB (using User model)
        await User.findByIdAndDelete(userId);

        // 2. Delete user from Firebase Authentication (optional)
        // await admin.auth().deleteUser(userId); // Optional deletion

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting user' });
    }
};