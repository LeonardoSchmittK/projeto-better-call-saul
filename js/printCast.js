
const castInfo = [
    { name: "Bob Odenkirk", characterName: "Saul Goodman", imgUrl: "../images/actors/saul.webp" }, 
    { name: "Bryan Cranston", characterName: "Walter White", imgUrl: "../images/actors/bryan-cranston.jpg" },
    { name: "Giancarlo Esposito", characterName: "Gus Fring", imgUrl: "../images/actors/Giancarlo_Esposito.jpg" },
    { name: "Rhea Seehorn", characterName: "Kim Wexler", imgUrl: "../images/actors/Rhea_Seehorn.jpg" },
    { name: "Jonathan Banks", characterName: "Mike Ehrman", imgUrl: "../images/actors/Jonathan_Banks_2012_2.jpg" },
    { name: "Patrick Fabian", characterName: "Howard", imgUrl: "../images/actors/Patrick_Fabian.jpg" },

]

function printCast() {
    const sectionContainer = document.querySelector(".sectionContainer");
    castInfo.forEach((actor) => {
        const newDiv = document.createElement("div");
        const newImg = document.createElement("img");
        const newTitle = document.createElement("h1");
        const newSpan = document.createElement("span");
        newSpan.textContent =  actor.characterName;
        newTitle.textContent = actor.name
        newDiv.className = "actorContainer"
        newImg.src = actor.imgUrl
        newDiv.appendChild(newImg)
        newDiv.appendChild(newTitle)
        newDiv.appendChild(newSpan)
        sectionContainer.appendChild(newDiv);
    })
}

printCast()