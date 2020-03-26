const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    excercises: [
      {
        type: {
          type: String
        },
        name: {
          type: String
        },
        duration: {
          type: Number
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function() {
  return this.excercises.reduce((total, excercise) => {
    return total + excercise.duration;
  }, 0);
});

var Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

