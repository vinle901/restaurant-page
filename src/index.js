import "./styles.css";
import { populateHome } from "./home.js";
import { populateMenu } from "./menu.js"
import { populateAbout} from "./about.js"

console.log("JS file located");
let contentDiv = document.getElementById('content');
populateHome();


document.getElementById("homeButton").onclick = function() {populateHomeButton()};
document.getElementById("menuButton").onclick = function() {populateMenuButton()};
document.getElementById("aboutButton").onclick = function() {populateAboutButton()};

function populateHomeButton() {
    clearContent(contentDiv);
    populateHome();
}

export function populateMenuButton (){
    clearContent(contentDiv);
    populateMenu();
}

function populateAboutButton (){
    clearContent(contentDiv);
    populateAbout();
}

function clearContent(div) {
    while (div.lastElementChild){
        div.removeChild(div.lastElementChild);
        console.log('Child removed')
    }
    console.log('Finished removing children')
}