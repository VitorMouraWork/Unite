import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        //required: [true, 'Password is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters!"]
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 4-20 alphanumeric letters and be unique!"]
    },
    picture: {
        type: String,
    },
    nickname: {
        type: String,
    },
    phoneNumber: {
        type: String,
        match: [/^(?=.{8,10}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Phone number invalid"]
    },
    bannerPicture: {
        type: String,
    },
    bio: {
        type: String,
    },
    tags: {
        type: String,
    },
    birthDate: {
        type: String,
    },
    likes: {
        type: [],
    },
    comments: {
        type: [],
    },
    pins: {
        type: [],
    },
    followers: {
        type: [],
    },
    following: {
        type: [],
    },
});

const User = models.User || model("User", UserSchema);

export default User;