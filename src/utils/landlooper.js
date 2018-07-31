let card = require('../templates/card');

module.exports = function llooper(data){
    let HTML = data.map((item)=>{
        if(!item.poster_path){
            item.poster_path = '../public/images/dummy.jpg'
        }else{
            item.poster_path = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
        }
        return card(item.id, item.poster_path, item.original_title)
    });
    
    return HTML.join("");
}