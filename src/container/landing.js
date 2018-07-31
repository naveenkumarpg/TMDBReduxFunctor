const store = require("../store");
const Error = require('../utils/error');

module.exports = function(movieId){
    var movieSText = document.getElementById("moviename").value;
    
    if(movieSText.length < 2){
        Error("Please enter atleast two characters in the search field.");
    }else{

        store.dispatch({ 
            type: 'SEARCHING',
            payload: true
        });

        let url = `http://api.themoviedb.org/3/search/movie?api_key=66fa95d87d40faf5c50324a339937e6c&query=${movieSText}`;
        //let url = '/src/json/landing.txt';
        var getData = new Promise((resolve,reject) =>{
            fetch(url).then((response) => {
                return response.json();
            }).then((response) => {
                resolve(response);
            });
        });

        getData.then((response) => {
            if(response.results.length <=0){
                Error("There are no Movies with search term, Pelase enter some other name");
                document.getElementById('datacontainer').classList.remove('loader');
            }else{

                store.dispatch({ 
                    type: 'SEARCHING',
                    payload: false
                });

                store.dispatch({
                    type: 'SEARCH_LANDING_COMPLETE',
                    payload: response
                });   
                            
            }
        });
    }
};