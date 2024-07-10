const express=require('express')
const app=express();
const db=require('./db')
const PORT=process.env.PORT || 3002;
const bodyParser=require('body-parser');
app.use(bodyParser.json())// req.body
const Person=require('./models/Person');
const MenuItem=require('./models/MenuItem')
app.get('/' ,function(req,res){
    res.send('Welcome to my hotel...')
})
// Import the router files
const personRoutes=require('./routes/personRoutes')
const menuItemRoutes=require('./routes/menuItemRoutes')
// Use the routes
app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
