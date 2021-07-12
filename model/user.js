var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    patientNo: String,
    name: String,
    status: String
});
module.exports = mongoose.model('User', UserSchema);