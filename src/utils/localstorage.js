module.exports = function getlocal(item){
    let defaultFilters = [];
    if(item == "favList"){
        defaultFilters = ["History","Animated", "Romantic","Blockbusters","New","HD"]
    }
    
    var itemValue = localStorage.getItem(item);
    return localStorage.getItem(item) || defaultFilters;
}

