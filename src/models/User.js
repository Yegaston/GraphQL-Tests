import { Schema, model } from 'mongoose';

const username = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: Number
});

export default model('User', username);