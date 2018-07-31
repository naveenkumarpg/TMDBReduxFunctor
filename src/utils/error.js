module.exports = function error(Message){

    let ErrorElement = document.getElementById("errortext");
        ErrorElement.innerHTML = Message;
        ErrorElement.classList.remove("hide");
        
        setTimeout(() =>{
            ErrorElement.classList.add("hide")
        },4000);
}