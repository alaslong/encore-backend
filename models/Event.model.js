const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Event name is required."],
    },
    description: {
      type: String,
      required: [true, "Event descripton is required."],
    },
    price_per_person: {
      type: Number,
      required: [true, "Price (per person) is required."],
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: 'Provider',
        required: [true, "Provider is required"]
    },
    image: {
        type: String
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
