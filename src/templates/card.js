module.exports = function cardHTML(id, imagePath, title) {
    return `<div class="col-xs-6 col-md-3"><a href="${'/index.html?movie='+id}" class="movieitem">
            <div class="poster_wrap" style="background-image:url('${imagePath}')">
                <img class="poster" src="public/images/dummy.jpg" />
                <p class="title">${title}</p>
            </div>
            </a></div>`;
  }



