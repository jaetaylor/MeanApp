// models are supposed to be simple, defining schemas for db
// gives interface into MongoDB, provide models that map to the db
var mongoose = require('mongoose');

// define properties for the object
// Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
  title: {
  type: String,
  required: true
},
url: {
  type: String,
  required: true
}
});

// must always assign requires to module.exports
// Export the model.
module.exports = mongoose.model('movie', MovieSchema);
