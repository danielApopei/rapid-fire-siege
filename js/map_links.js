// wait for document to be ready
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

function initApp() {
    const jpgArray = ["border","closequarter", "clubhouse","nighthavenlabs","stadium"];
    const avifArray = ["consulate","lair","themepark"];
    const mapLinks = document.querySelectorAll(".map-link");
    mapLinks.forEach((mapLink) => {
        const mapName = mapLink.id.split("-")[0];
        console.log(mapName);
        if(jpgArray.includes(mapName))
            mapLink.style.backgroundImage = `url(./img/maps/${mapName}.jpg)`;
        else if(avifArray.includes(mapName))
            mapLink.style.backgroundImage = `url(./img/maps/${mapName}.avif)`;
        else
            mapLink.style.backgroundImage = `url(./img/maps/${mapName}.webp)`;
        mapLink.style.backgroundSize = "cover";
        mapLink.addEventListener("hover", (mapLink) => {
            console.log(mapName);
            mapLink.textContent = mapName.toUpperCase();
        });
    });
}