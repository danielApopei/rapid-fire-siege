document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

function initApp() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab => {
        if(tab.id === "1")
            tab.style.display="flex";
        else
            tab.style.display = "none";
    }));
    tabButtons.forEach((tabButton) => {
        tabButton.addEventListener("click", (event) => {
            console.log(`clicked: ${event.target.id}`);
            const thisId = tabButton.id;
            const tabs = document.querySelectorAll(".tab");
            tabs.forEach((tab => {
                if(tab.id === thisId)
                    tab.style.display="flex";
                else
                    tab.style.display = "none";
            }));
        });
    });
}