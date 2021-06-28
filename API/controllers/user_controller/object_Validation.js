const Joi = require('joi')

module.exports.validateRegistration = (body,next, code) => {

    const schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    // body data validation
    const result = schema.validate(body);    
    if (result.error){
        handle_requestError(code,next,result.error);
    }  
}

