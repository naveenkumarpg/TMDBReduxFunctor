module.exports = function button(text){
    return `<input class="favbuttons btn" id="fav-${text}" type="button" data-text="${text}" value="${text}">`;
}