function addImage() {
    const imageURL = document.getElementById("imageURL").value;
    const imageName = document.getElementById("imageName").value;
    const displayImage = document.getElementById("displayImage");
    const imageList = document.getElementById("imageList");

    if (imageURL && imageName) {
        // Změna obrázku
        displayImage.src = imageURL;

        // Přidání zadaného názvu obrázku do seznamu
        const listItem = document.createElement("li");
        listItem.textContent = imageName;
        imageList.appendChild(listItem);

        // Vymazání inputů po přidání obrázku
        document.getElementById("imageURL").value = '';
        document.getElementById("imageName").value = '';
    } else {
        alert("Prosím, zadej platnou URL a název obrázku.");
    }
}
