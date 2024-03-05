import Joi from "joi";

export const createOrderDataSchema = Joi.object({
    id: Joi.string().required(),
    user:{
    name: Joi.string().required(),
    email: Joi.string().pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)).required(),
    phone: Joi.string().pattern(new RegExp(/^[\d()-]+$/)).required(),
    address: Joi.string().required()
    },
    order: {
        id: Joi.string().required(),
        name: Joi.string().required(),
        price: Joi.string().pattern(/^[0-9,]+$/).required(),
        dataWasAdded: Joi.string().pattern(new RegExp(/^\d+(\.\d+)?$/)).required(),
        image: Joi.string().required()
    }
})