var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose'); // for working w/ our database
var Schema = mongoose.Schema;

var HbCommentSchema = new Schema({
user: String,
comment: { type: String, required: false, index: { unique: true }},
image: { type: String, select: true }
 });


module.exports = HbCommentSchema;
