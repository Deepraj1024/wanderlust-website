const Joi = require("joi");
const Listing = require("./models/listing");

 module.exports.listingSchema = Joi.object({
    Listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        Country: Joi.string().required(),
        Price: Joi.number().required().min(0),
        image: Joi.string().allow("", null) 
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        Comment: Joi.string().required(),
    }).required()
});  