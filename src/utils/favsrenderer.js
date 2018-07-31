const Favbutton = require('../templates/button');
const GetLocalStorage = require('../utils/localstorage');

module.exports = function updatefavs(data){
    
    if(data){

        let buttonContainer = document.getElementById("favs");
        
        let ButtonHTML =  data.map((item)=>{
            return Favbutton(item);
        });

        buttonContainer.innerHTML = ButtonHTML.join("");

        let activeMovie = document.getElementById("movieid").dataset.movieid;
        var favedItems = GetLocalStorage(activeMovie) || [];
        
        if(favedItems.length > 0){
            favedItems = favedItems.split(",");    
        }
        
        favedItems.map((item) =>{
            document.getElementById("fav-"+item).classList.add('btn-success');
        });
        

    }

}