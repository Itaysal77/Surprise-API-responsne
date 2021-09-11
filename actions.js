var { surprises, terms_list } = require('./database.js');
 const API_surprise=require('./api_surprise');
const Surprise = require('./surprise.js');


//define the surprises in the mission page+bored man activity to do 
 const chuck= new API_surprise((name,year)=>{return year<=2000},'chuck-norris-joke','https://media.giphy.com/media/2dJ5Iait4QrW8/giphy.gif',"https://api.chucknorris.io/jokes/random","value");
 const bored=new API_surprise((name,year)=>{return year>=2005},'bored-man','https://media.giphy.com/media/F3BeiZNq6VbDwyxzxF/giphy.gif','https://www.boredapi.com/api/activity',"activity");
 const kanye=new API_surprise((name,year)=>{return year>2000&&name.charAt(0)!='A'&&name.charAt(0)!='Z'},'kanye-quote','https://media.giphy.com/media/Jylb9PZHvJZSg/giphy.gif','https://api.kanye.rest',"quote");
const name_sum=new Surprise((name,year)=>{return name.charAt(0)!='Q'},'name-sum','https://media.giphy.com/media/APqEbxBsVlkWSuFpth/giphy.gif');
const nothing=new Surprise((name,year)=>{return false},'No-Type','https://media.giphy.com/media/idjEJDyCNQrWJUHa3x/giphy.gif');


name_sum.main_func=(name,year)=>{
    return new Promise((resolve)=>{
    resolve((name.replace(" ","").split('').reduce((acc,curr)=>{
        const char_val=curr.charCodeAt(0);
        return curr>='A'&&curr<='Z'?acc+char_val-64: acc+char_val-96;},0)
        ).toString())})}

module.exports={
     handle_request:(name,year)=>{
        return new Promise((resolve)=>{
        const curr=getType(name,year);
        curr.main_func(name,year).then((result)=>{
            resolve({'obj':curr, 'result':result});})
            .catch((err)=>{throw err});
          })}
        ,
    //updates the count of the type of current result sent to client
    update: (type)=>{
        surprises.find(c=>c.type===type).count++;}
}  

//getting a random type to get is request
function getType(name,year){
    const curr_options=terms_list.filter((curr)=>curr.terms(name,year));
     return curr_options.length===0? nothing: //if no type matches the name and year entered
     curr_options[Math.floor(Math.random() * curr_options.length)];
}

