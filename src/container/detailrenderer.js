let rowHTML = require('../templates/row');
let DetailTemplate = require('../templates/detail');
let FavRenderer = require('../utils/favsrenderer');
const GetLocalStorage = require('../utils/localstorage');
const SetLocalStorage = require('../utils/setlocalstorage');

module.exports = function landingren(data){

    if(data){
        const screen = DetailTemplate(data)
        document.getElementById('datacontainer').innerHTML = screen;

        let storageData = GetLocalStorage('favList');
        FavRenderer(storageData);

        var favbuttons = document.getElementsByClassName("favbuttons");

        for(let i = 0; i < favbuttons.length; i++) {

            favbuttons[i].addEventListener('click', (e) =>{

                let activeMovie = document.getElementById("movieid").dataset.movieid;
                var currnetData = GetLocalStorage(activeMovie) || [];

                if(currnetData.length >0){
                    currnetData = currnetData.split(",");
                }

                let el =  e.target || e.srcElement;
                let favitem = el.dataset.text;
                el = document.getElementById('fav-'+favitem);

                if(el.classList.contains("btn-success")){
                    el.classList.remove("btn-success");
                    let movieIndex = currnetData.indexOf(favitem);
                    if(movieIndex >= 0){
                        currnetData.splice(movieIndex, 1);
                        SetLocalStorage(activeMovie, currnetData);
                    }
                }else{
                    el.classList.add("btn-success");
                    currnetData.push(favitem);
                    SetLocalStorage(activeMovie, currnetData);
                }
                
            }, false);
        }
    }
}