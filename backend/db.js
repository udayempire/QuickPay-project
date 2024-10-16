const mongoose = require("mongoose")
dbUrl= process.env.DATABASE_URL;
mongoose.connect(dbUrl)
.then(()=>{console.log("Connected to MongoDb Successfully")})
.catch(()=>{console.log("Failed Connecting to MongoDb")})


const userSchema = mongoose.Schema({
    emailAddress: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxlength:100
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, //if there is space in first or last of any name it will trim it down.
        lowercase: true,
        minLength:3,
        maxLength:30
    },
    password: {
        type: String,
        required: true,
        minLength:6,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength:50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const accountSchema = mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId, //Reference to User Model
        ref: "User",
        required: true
    },
    username: {
        type: String,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User',userSchema);
const Account = mongoose.model("Amount",accountSchema)

module.exports= {User,Account}