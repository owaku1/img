function changeImage() {
    var imageURL = document.getElementById("imageURL").value;
    var defaultImage = document.getElementById("defaultImage");

    if (imageURL) {
        defaultImage.src = imageURL;
    } else {
        alert("Prosím, zadej platnou URL obrázku.");
    }
}
