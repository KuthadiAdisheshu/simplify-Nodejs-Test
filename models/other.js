const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otherSchema=new Schema({
    id:{},
    number:{type: mongoose.Types.ObjectId,ref:"article"}
})
module.exports = mongoose.model('other', otherSchema);
