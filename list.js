function filterItems() {
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    var items = document.querySelectorAll(".item");

    items.forEach(function(item) {
        var itemName = item.querySelector("p").innerText.toLowerCase();
        var itemImg = item.querySelector("img");

        if (itemName.includes(searchTerm) && itemImg) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


const image = document.getElementById('fullscreenImage');

// image.addEventListener('click', function() {
//     if (this.requestFullscreen) {
//         this.requestFullscreen();
//     } else if (this.mozRequestFullScreen) { /* Firefox */
//         this.mozRequestFullScreen();
//     } else if (this.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//         this.webkitRequestFullscreen();
//     } else if (this.msRequestFullscreen) { /* IE/Edge */
//         this.msRequestFullscreen();
//     }
// });
