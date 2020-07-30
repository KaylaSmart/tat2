

module.exports = (sequelize, Sequelize) => {
    const Form = sequelize.define("form", {
        name: {
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        event: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.date
        },
        custom : {
            type: Sequelize.BOOLEAN
        },
        city: {
            type: Sequelize. STRING
        },
        comments:{
            type: Sequelize.STRING
        }

    });
    return Form;
};


// const mongoose = require('mongoose');


// const contactSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     event: String,
//     quantity: String,
//     date: Date,
//     custom: Boolean,
//     location:Boolean,
//     city: String,
//     method:String,
//     comments: String
// });

// const Contact = module.exports = mongoose.model("Contact", contactSchema);
