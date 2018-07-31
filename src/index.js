const store = require("./store");
const Landing = require('./container/landing');
const LandingRenderer = require('./container/landingrenderer');
const GetLocalStorage = require('./utils/localstorage');
const Detail = require('./container/detail');
const DetailRenderer = require('./container/detailrenderer');

document.getElementById("getdata").onclick = () => {
  Landing();
};

if(document.location.search){
  var movieId =  document.location.search.split("movie=")[1]
  Detail(movieId);
}

document.getElementById("moviename").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
      document.getElementById("getdata").click();
  }
});





store.subscribe(() =>{
  const data = store.getState();
  let dataContainer = document.getElementById('datacontainer');

  if(data.searching){
    dataContainer.innerHTML ="";
    dataContainer.classList.add("loader");  
  }else{
    dataContainer.classList.remove("loader");
    LandingRenderer(data.landingdata);
    DetailRenderer(data.detaildata);
  }

});