let Looper = require('../utils/landlooper');
let rowHTML = require('../templates/row');
let containerHTML = require('../templates/container');
let Compose = require('../utils/compose');


module.exports = function landingren(data){
    if(data){
        const cards = containerHTML(rowHTML(Looper(data.results)));
        document.getElementById('datacontainer').innerHTML = cards;
    }
}