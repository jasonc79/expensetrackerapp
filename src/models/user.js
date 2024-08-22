import { Schema, model } from "mongoose";
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    refreshtoken: { // Allows user to maintain user session without logging back in for a period of time
        type: String,
    },
});
export default model("User", userSchema);