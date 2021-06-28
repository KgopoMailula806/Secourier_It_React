const Logger = require('../../Auxilary_Methods/logger');
const {courses, SystemUsers} = require('../../PseudoDatabase');
const {handle_requestError} = require('../../Auxilary_Methods/object_body_validation');
const objec_Validation = require('./object_Validation')
var logger = new Logger()

/// Api calls for a generic user object
module.exports.getUserAt = (req,res,next) => {       
    let argId = parseInt(req.query.id);
    logger.print(`argId: ${argId}`)
    const userDetail =  SystemUsers.find(user => user.id === argId);
    if(typeof userDetail === 'undefined') // 404    
    {    
        handle_requestError(404,next,'User not found')
    }
    else res.send(userDetail);                
} 

module.exports.getAllUser = (req,res,next) => {           
    logger.print(`argId: ${argId}`)
    const userDetail =  SystemUsers
    if(typeof userDetail === 'undefined') // 404    
    {    
        handle_requestError(404,next,'User not found')
    }
    else res.send(userDetail);
} 

module.exports.Login = (req,res,next) => {
    //Get Query body
    let bodyData = req.body;
    //logger.print(`${req.body.email}`);            
    //logger.print(`email: ${email}`);    
    const userDetail =  SystemUsers.find(mail => mail.email === bodyData.email);
    
    if(typeof userDetail === 'undefined') // 404    
    {    
        handle_requestError(404,next,`User not found email: ${bodyData.email}, passwor: ${bodyData.password}`);
    }
    else {
        //evaluate user password
        if(userDetail.password === bodyData.password){
            res.send(userDetail);
        }else
        {
            handle_requestError(404,next,'PassWords Doesn\'t match ')
        }
    }
}
module.exports.Register = (req,res,next) => {
    objec_Validation.validateRegistration(req.body,next,400);
    const cnewCourse = {
        id: courses.length + 1,
        name: req.body.name
    };    
    courses.push(cnewCourse);
    let newIndex = courses.find(courseID => courseID.id === courses.length);
    logger.print(JSON.stringify(courses));
    logger.print(newIndex);
    res.send(JSON.stringify(newIndex.id));
}
    