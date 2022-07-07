//schema of articles table
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articletableSchema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    id: { type: Number },
    author: { type: String },
    title: { type: String },
    body: { type: String },
    numberoflikes: { type: Number },
    numberofviews: { type: Number },
    create_at:{type:Date,default:Date.now()}
})

module.exports = mongoose.model('article', articletableSchema);

// const otherSchema=new Schema({
//     numberoflikes:{type: mongoose.Types.ObjectId,ref:"article"}
// })
// const article=Model("article",articletableSchema)
// const other = Model('other', otherSchema);
// module.exports={article,other}
