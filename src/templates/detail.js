  //Template to display movie details details.
  module.exports = function detailcard(movie){

    movie.poster_path = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    
    let HTML = `<div id="movieid" class="moviedetail" data-movieid="${movie.id}" style="background-image:url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')">
        <div class="mask">
            <div class="container">
                <div class="col-xs-4">
                    <img class="detailposter" src=${movie.poster_path} />
                </div>
                <div class="col-xs-8">
                    <h1>${movie.original_title}</h1>
            
                    <h4 class="inline">Number of Votes : </h4> 
                    <p>${movie.vote_count}</p>
                    
                    <h4 class="inline">Rating : </h4> 
                    <p>${movie.vote_average}</p>
            
                    <h3>Overview : </h3> 
                    <p>${movie.overview}</p>
                    
                    <h3>Languages : </h3> 
                    <p>${movie.spoken_languages.map((item) => `<span>${item.name}</span>` ).join(" | ")}</p>
                    
                    <h3>Favorites List : </h3> 
                    <div class="favbuttons" id="favs"></div>
                    <p class="disclaimer">* Green buttons represents they are added as Favorites</p>
                </div>
            </div>
        </div>
    </div>`;

    return HTML;
};