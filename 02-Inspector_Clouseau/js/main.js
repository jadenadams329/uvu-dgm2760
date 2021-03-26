document.querySelector('#assignment').innerText = "Inspector Clouseau";
document.querySelector('#slogan').innerText = "Today's Investigation";
document.querySelector('#objective').innerText = "What I learned: "
document.querySelector('#footer').innerText = "Assignment for DGM2760 by Jaden Adams";
document.querySelector('#windowPropertyHeader').innerText = "Window Properties";
document.querySelector('#documentPropertyHeader').innerText = "Document Properties";

function reDisplay() {
    let windowSizes = `Window Size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall`;
    let offset = `Window offset is ${window.screenX} pixels from the left of the display and ${window.screenY} pixels from top of the display`;

    let documentTitle = `The document title is: ${document.title}`
    let lastModified = `The page was last updated: ${document.lastModified}`

    let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset}`
    let myDocument = document.querySelector('#myDocument').innerText = `${documentTitle} \n ${lastModified}`
}
reDisplay();


