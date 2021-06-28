const Logger = require('../../Auxilary_Methods/logger');
const {courses, SystemUsers} = require('../../PseudoDatabase');
const {handle_requestError,validateCourse} = require('../../Auxilary_Methods/object_body_validation');
var logger = new Logger()

module.exports.getCourses = (req,res,next)=> {            
    res.send(courses);            
}

module.exports.getCoursesAt = (req,res,next)=> {
    let argId = parseInt(req.query.id);
    logger.print(`argId: ${argId}`)
    const course =  courses.find(c => c.id === argId);
    if(typeof course === 'undefined') // 404    
    {    
        handle_requestError(404,next,'course not found')
    }
    else res.send(course);            
}

module.exports.pushCourse = (req,res,next) => {
    validateCourse(req.body,next,400);
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

module.exports.updateCourse = (req,res,next) => {
    // get the desired object
    let argId = parseInt(req.query.id);
    const course =  courses.find(c => c.id === argId);    
    const cnewCourse = {
        id: courses.length + 1,
        name: req.body.name
    };  
    validateCourse(req.body,next,400);
       
    // Update property 
    course.name = req.body.name;

    res.send(course)
}
