const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    event: String,
    quantity: String,
    date: Date,
    custom: Boolean,
    location:Boolean,
    city: String,
    method:String,
    comments: String
});

const Contact = module.exports = mongoose.model("Contact", contactSchema);
