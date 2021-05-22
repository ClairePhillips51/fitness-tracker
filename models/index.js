// Exporting an object containing all of our models

let rootDir = process.env.PWD;

module.exports = {
    Resistance: require(rootDir+"/models/Resistance"),
    Cardio: require(rootDir+"/models/Cardio"),
    Workout: require(rootDir+"/models/Workout")
  };