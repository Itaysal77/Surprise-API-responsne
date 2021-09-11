const express= require ('express');
const app=express();
const actions = require('./actions');
const {surprises}=require('./database');
const port=process.env.PORT||3000;
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const path = require('path');

//total request succeded
var total=0;

app.listen(port,()=>console.log(`Listening on port: ${port}`));

app.get('/',function(req,res){
    res.render('index');
});

app.get('/api/surprise',(req,res)=>{
    const name=req.query.name;
    const birth_year=req.query.birth_year;
    if (!name||!birth_year)
        res.status(400).send('Invalid query parameters');
       else{
           actions.handle_request(name,birth_year)
           .then((result)=>{
               if (result.obj.type!="No-Type"){
                actions.update(result.obj.type)
                total++;
               }
                res.status(200).render('./layouts/surprise',{
                    toPrint: result.result,
                    type:result.obj.type,
                    gif_link:result.obj.gif
                });})
            .catch((err)=>{throw err});
        }
});
app.get('/api/stats',(req,res)=>{
        res.status(200).render('./layouts/stats',{total,
        surprises});
});