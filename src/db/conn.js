const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/caRegistration", {
    useNewUrlPraser:true,
    useUnifiedToplogy:true,
    UseCreateIndex:true
}).then(() => {
    console.log(`connection succesful`);
}).catch(() => {
    console.log(`no connection`);
})