const store = require('../store')

module.exports = function detail(movieId){

    if(movieId){
        let url =  `http://api.themoviedb.org/3/movie/${movieId}?api_key=66fa95d87d40faf5c50324a339937e6c`;
        //let url = '/dist/json/detail.json';

        //promise to make a call
        var getDetailData = new Promise((resolve,reject) =>{
            fetch(url).then((data) => {
                return data.json();
            }).then((data) =>{
                resolve(data);
            });
        });

        //On Sucessfull promise resolved, calling the method to render the detais to the page.
        getDetailData.then((response) =>{

            store.dispatch({ 
                type: 'SEARCHING',
                payload: false
            });

            store.dispatch({
                type: 'SEARCH_DETAIL_COMPLETE',
                payload: response
            });
                 
        });
    }

}