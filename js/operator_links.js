// wait for document to be ready
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

function initApp() {
    const operatorLinks = document.querySelectorAll(".operator-link");
    operatorLinks.forEach((operatorLink) => {
        const operatorName = operatorLink.id.split("-")[0];
        console.log(operatorName);
        operatorLink.style.backgroundImage = `url(./img/operators/${operatorName}.svg)`;
        operatorLink.addEventListener("hover", (operatorLink) => {
            console.log(operatorName);
            operatorLink.textContent = operatorName.toUpperCase();
        });
    });
}