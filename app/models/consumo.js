var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConsumoSchema = new Schema({
banco: String,
tipo1: Number,
tipo2: Number,
tipo3: Number,
tipo4: Number
 });


module.exports = ConsumoSchema;
