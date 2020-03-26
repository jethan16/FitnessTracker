const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          required: 'please enter a workout.' 
        },
        name: {
          type: String,
          required: 'please enter a workout type.' 
        },
        duration: {
          type: Number,
          required: 'please enter a workout duration.' 
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
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

var Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

