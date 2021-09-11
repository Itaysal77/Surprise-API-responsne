const Surprise=require('./surprise');
var { surprises, terms_list } = require('./database.js');
const request = require('request');

class API_surprise extends Surprise {
    terms(){};
    constructor(terms,type,gif,url, toReturn){
        super(terms,type,gif);
        this.url=url;
        this.toReturn=toReturn;
        terms_list.push(this);
    }
   main_func=(name,year)=>{
        return new Promise( (resolve)=>{
            request(`${this.url}`, { json: true }, (err, result, body) => {
                if (err) { throw   err }
                resolve (body[`${this.toReturn}`]);
              });
            });
    };
}
module.exports=API_surprise;
