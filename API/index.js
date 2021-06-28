const Logger = require('./Auxilary_Methods/logger')
const {validateCourse,handle_requestError} = require 
const {courses, SystemUsers} = require('./PseudoDatabase')
var logger = new Logger()
const express  = require('express');
const cors = require('cors')
const app = express();
const Joi = require('joi')
app.use(express.json())
app.use(cors());
//Import controllers
const user__controls =  require('./controllers/user_controller/user__controls');
const courses_controllers = require('./controllers/courses/courses_controller');

app.get('/api',(req,res) => {
    res.send('Api is Functional :)')
});

// User requests 
app.get('/api/getAllUser',user__controls.getAllUser);
app.get('/api/getUserAt',user__controls.getUserAt);
app.post('/api/Login', user__controls.Login);

// hellow world courses example
app.get('/api/getCourses',courses_controllers.getCourses);
app.get('/api/getCoursesAt', courses_controllers.getCoursesAt);
app.post('/api/pushCourse', courses_controllers.pushCourse);
app.put('/api/updateCourse', courses_controllers.updateCourse);

// PORT environment value
const  port = process.env.PORT || 3000
app.listen(port, () => logger.print(`listening on port ${port}`));
// app.put()


