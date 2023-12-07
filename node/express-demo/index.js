const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'course1'}, 
    {id: 1, name: 'course2'}, 
    {id: 1, name: 'course3'}, 
]; 

app.get('/', (req, res) => {
    res.send('Hello World!'); 
});

app.get('/api/courses', (req, res) => {
    res.send(courses); 
}); 

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // 404 Error (Object not Found)
    if (!course) res.status(404).send('404: The course with the given ID was not found.'); 
    res.send(course); 
}); 

// PORT (Environment Variable)
const port = process.env.PORT || 3000; 
app.listen(3000, () => console.log(`Listening on port ${port}...`)); 

