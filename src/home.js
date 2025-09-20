import { populateMenuButton } from "./index.js";
import "./styles.css";
let contentDiv = document.getElementById('content');

export function populateHome(){
    console.log('Populating the home page')
    
    let temp;

    temp = document.createElement('h1');
    temp.innerText = 'Welcome to Thaicoon Restaurant';
    contentDiv.appendChild(temp);
    
    temp = document.createElement('p')
    temp.innerText = 'Experience the authentic flavors of Thailand in the heart of Pearland, Texas. Our family-owned restaurant brings you traditional Thai cuisine prepared with fresh ingredients and time-honored recipes passed down through generations.';
    contentDiv.appendChild(temp);

    temp = document.createElement('p')
    temp.innerText = 'From our signature Pad Thai to aromatic Green Curry, every dish is crafted with care to deliver the perfect balance of sweet, sour, salty, and spicy flavors that define authentic Thai cuisine.';
    contentDiv.appendChild(temp);

    temp = document.createElement('button');
    temp.onclick = function() {populateMenuButton();};
    temp.innerText = 'View Our Menu';
    temp.className = 'cta-button';
    contentDiv.appendChild(temp);

    temp = document.createElement('h2')
    temp.innerText = 'Hours of Operation';
    contentDiv.appendChild(temp);

    temp = document.createElement('p')
    temp.innerText = 'Monday - Thursday: 11:00 AM - 9:00 PM \n Friday - Saturday: 11:00 AM - 10:00 PM \n Sunday: 12:00 PM - 9:00 PM';
    contentDiv.appendChild(temp);

    temp = document.createElement('h2')
    temp.innerText = 'Location';
    contentDiv.appendChild(temp);

    temp = document.createElement('p')
    temp.innerText = '2518 Pearland Parkway, Pearland, TX 77581 \n Phone: (281) 485-8424';
    contentDiv.appendChild(temp);

    console.log('Finished populating the home page')
}