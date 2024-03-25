import { Schema, model } from "mongoose";

const orderDataSchema = new Schema({
    user:{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phone: {
        type: String,
        required: true,
        match: /^[+\-\d()]+$/
    },
    address: {
        type: String,
        required: true
        }
    },
    order: [{
        id: {
        type: String,
        required: true
    },
        name: {
        type: String,
        required: true
    },
        quantity: {
        type: String,
        required: true,
        match: /^\d+$/
    },
        price: {
        type: String,
        required: true,
        match: /^[0-9,]+$/
    },
        dataWasAdded: {
        type: String,
        required: true,
        match: /^[0-9.]+$/
    },
        image: {
        type: String,
        required: true
    }
    }]
}, { versionKey: false, timestamps: true });

orderDataSchema.set('toObject', {
    transform: function(doc, ret) {
        ret._id = ret.id; // Замінюємо id на _id
        delete ret.id; // Видаляємо id
        return ret;
    }
});

const OrderData = model("order-data", orderDataSchema);

export default OrderData;