import { Schema, model } from 'mongoose';

const FlashInfoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    schedule: {
      type: Number,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model('FlashInfo', FlashInfoSchema);
