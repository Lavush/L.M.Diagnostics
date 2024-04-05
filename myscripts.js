function filterItems() {
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    var items = document.querySelectorAll(".item");

    items.forEach(function(item) {
        var itemName = item.querySelector("name").innerText.toLowerCase();
        var itemImg = item.querySelector("img");

        if (itemName.includes(searchTerm) && itemImg) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
