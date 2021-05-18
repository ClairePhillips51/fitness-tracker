const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required:"Type of excercise"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  duration: {
    type: Number,
    required: "Enter duration of workout"
  },
  distance: {
    type: Number,
    required: "Enter distance traveled for workout"
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
