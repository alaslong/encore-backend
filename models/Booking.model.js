const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const bookingSchema = new Schema(
  {
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "Booking company is required"]
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Booking team is required"]
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Booking manager is required"]
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: 'Provider',
        required: [true, "Booking provider is required"]
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: [true, "Booking event is required"]
    },
    attendees: {
        type: [ Schema.Types.ObjectId ],
        ref: 'User',
        required: [true, "Booking attendees are required"]
    },
    date: {
        type: String,
        required: [true, "Booking date is required"]
    },
    time: {
        type: String,
        required: [true, "Booking time is required"]
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
