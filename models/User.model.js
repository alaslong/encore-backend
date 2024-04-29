const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email address is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    type: {
      type: String,
      enum: ['manager', 'employee', 'provider']
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Team'
    },
    provider: {
      type: Schema.Types.ObjectId,
      ref: 'Provider'
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
