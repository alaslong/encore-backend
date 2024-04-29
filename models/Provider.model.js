const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const providerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Provider name is required."],
    },
    description: {
      type: String,
      required: [true, "Provider description is required."]
    },
    address: {
        type: String,
        required: [true, "Provider address is required."]
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

const Provider = model("Provider", providerSchema);

module.exports = Provider;
