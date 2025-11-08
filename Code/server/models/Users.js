import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profilePic: {
        type: String
    },
    about: {
        type: String
    },
    mood: {
        type: String,
        default: '😊 Happy'
    },
    posts: {
        type: Array
    },
    followers: {
        type: Array
    },
    following: {
        type: Array
    }
});

const User = mongoose.model("users", userSchema);
export default User;