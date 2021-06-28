const Joi = require('joi')

const validateCourse = (course,next, code) => {

    const schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    // body data validation
    const result = schema.validate(course);    
    if (result.error){
        handle_requestError(code,next,result.error);
    }  
}

const handle_requestError =  (code,next, message) =>{
    const err = new Error(message);
    err.status = code;
    next(err);
}

module.exports = {validateCourse,handle_requestError}
