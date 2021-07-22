import backpackArray from "./components/backpackData.js";

const backpackList = backpackArray.map((backpack) => {
    let backpackArticle = document.createElement("article");
    backpackArticle.classList.add("backpack");
    backpackArticle.setAttribute("id", backpack.id);
    backpackArticle.innerHTML = `
        <img src=${backpack.image}>
        <h1 class="backpack_name">${backpack.name}</h1>
        <ul class="backpack_properties">
            <li>Volume: <span>${backpack.volume}</span></li>
            <li>Color: <span>${backpack.color}</span></li>
            <li>Age: <span>${backpack.backpackAge()} days old</span></li>
            <li>Number of pockets: <span>${backpack.numPocket}</span></li>
            <li>
                <form class="leftForm">
                    <span>Left strap length: 
                        <span>${backpack.strapLength.left}</span>
                    </span>
                    <input type="text" value="" size=5>
                    <button type="button" class="lengthButton">Adjust</button>
                </form>
            </li>
            <li>
                <form class="rightForm">
                    <span>Right strap length: 
                        <span>${backpack.strapLength.right}</span>
                    </span>
                    <input type="text" value="" size=5>
                    <button type="button" class="lengthButton">Adjust</button>
                </form>
            </li>
            <li class="packbackLidStatus">Lid status: <span>${backpack.lidOpen ? "Open" : "Closed"}</span></li>
        </ul>
        <button class="lidButton">Open Lid</button>
    `;

    const button = backpackArticle.querySelector(".lidButton");
    const status = backpackArticle.querySelector(".packbackLidStatus span");

    button.addEventListener("click", (event) => {
        button.classList.toggle("active");
        if (status.innerText === "Open") {
            status.innerText = "Closed";
            button.innerText = "Open Lid";
        } else {
            status.innerText = "Open";
            button.innerText = "Close Lid";
        }
    });

    button.addEventListener("mouseenter",() => {
        button.classList.add("orange");
    }, false);
    
    button.addEventListener("mouseleave",() => {
        button.classList.remove("orange");
    }, false);

    const buttonList = backpackArticle.querySelectorAll(".lengthButton");
    buttonList.forEach((button) => {
        button.addEventListener("click", () => {
            let newLength = button.parentElement.querySelector("input");
            button.parentElement.querySelector("span span").innerText = newLength.value;
            newLength.value = "";
        }, false);
    });
    return backpackArticle;
});


const main = document.querySelector(".mainContent");
backpackList.forEach((backpack) => {
    main.append(backpack);
});

