const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Team name is required."],
    },
    description: {
      type: String,
    },
    budget_per_member: {
      type: Number,
      required: [true, "Budget (per member) is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Team = model("Team", teamSchema);

module.exports = Team;
