const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required:"Enter a type of workout."
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for exercise."
  },
  duration: {
    type: Number,
    required: "Enter the duration of workout"
  },
  weight: {
    type: Number,
    required:"Enter number of pounds used."
  },
  reps: {
    type: Number,
    required: "Enter number of reps"
  },
  sets: {
    type: Number,
    required: "Enter number of sets"
  }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;
