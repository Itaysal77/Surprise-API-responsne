var { surprises, terms_list } = require('./database.js');
//used as a default class for every request we would like to add. 
class Surprise{
    constructor(terms,type,gif){
        this.terms=terms;
        this.type=type;
        surprises.push({type:`${type}`,count:0})
        terms_list.push(this); // pushing the object itself to be filtered for the random type selection
        this.gif=gif;
    }
    
    //default main_func- should be overrided by function as wished
main_func=((name,year)=>{
    return new Promise((resolve)=>{resolve( "No function was defined, this is a default message!")})
})
   
    
}
module.exports=Surprise;