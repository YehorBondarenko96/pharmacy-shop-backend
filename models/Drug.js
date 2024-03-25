import { Schema, model } from "mongoose";

const drugSchema = new Schema({
    name: {
        type: String,
    },
    quantity: {
        type: String,
    },
    price: {
        type: String,
    },
    dataWasAdded: {
        type: String,
    },
    image: {
        type: String,
    },
}, { versionKey: false, timestamps: true });

drugSchema.set('toJSON', {
    transform: function(doc, ret) {
        ret.id = ret._id; // Замінюємо _id на id
        delete ret._id; // Видаляємо _id
        return ret;
    }
});

const Drug = model("drugs", drugSchema);

export default Drug;