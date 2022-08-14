module.exports = async(data) => {
    const Joi = require('joi');

    const schema = Joi.object({
        firstName: Joi.string()
            .min(1)
            .max(25)
            .required(),

        lastName: Joi.string()
        .min(1)
        .max(25)
        .required(),

        email: Joi.string()
        .min(1)
        .max(50)
        .email(),

        message: Joi.string()
        .min(1)
        .max(500)
        .required()
        })


    try{
        const result = await schema.validate(data);
        return result;
    }catch(error){
        return false;
    }
    
}