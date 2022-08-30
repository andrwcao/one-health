const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        fName: { type: String, required: true },
        lName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        gender: { type: String, required: true },
        fitbitId: { type: String },
        age: { type: String },
        dateOfBirth: { type: String },
        height: { type: String },
        heightUnit: { type: String },
        memberSince: { type: String },
        weight: { type: String },
        weightUnit: { type: String },
        accessToken: { type: String },
        refreshToken: { type: String },
        lastUpdateTimestamp: { type: Date },
    }
);

module.exports = mongoose.model('User', userSchema);