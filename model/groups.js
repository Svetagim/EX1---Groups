const mongoose = require('mongoose');

//database schema
const group = new mongoose.Schema({
    Name: { type: String, required: true, index: 1 },
    Points: { type: Number, required: true },
    W: Number,
    L: Number,
    Coach: { type: String, required: true },
    Players: [
        {
            Name: String,
            Height: Number,
            Age: Number
        }
    ]
});

//validation
group.path('Points').validate(
    (val) => {
        console.log(`\nvalidation ${val}`)
        let iVal = Number(val)
        console.log(iVal);
        return iVal > 0;
    }, "Score cant be negetive");

//model
const Group = mongoose.model('Group', group);
module.exports = Group;

