let contentDiv = document.getElementById('content');
import { populateMenuButton } from "./index.js";
export function populateAbout(){
    console.log('Populating the about page')
    
    let temp;

    temp = document.createElement('h1');
    temp.innerText = 'About Thaicoon Restaurant';
    contentDiv.appendChild(temp);
    
    temp = document.createElement('p');
    temp.innerText = 'Located in the vibrant community of Pearland, Texas, Thaicoon Restaurant has been serving authentic Thai cuisine since 2010. Our family-owned establishment brings the rich culinary traditions of Thailand to the heart of Texas, creating a welcoming space where food lovers can experience the true flavors of Southeast Asia.';
    contentDiv.appendChild(temp);

    temp = document.createElement('h2');
    temp.innerText = 'Our Story';
    contentDiv.appendChild(temp);

    temp = document.createElement('p');
    temp.innerText = 'Founded by Chef Siriporn and her family, who immigrated from Bangkok, Thaicoon represents a bridge between two cultures. Using recipes passed down through generations and the freshest local ingredients, we create dishes that honor traditional Thai cooking while embracing the warm hospitality of Texas.';
    contentDiv.appendChild(temp);

    temp = document.createElement('h2');
    temp.innerText = 'Our Team';
    contentDiv.appendChild(temp);

    temp = document.createElement('p');
    temp.innerText = 'Our head chef, Siriporn, trained in the royal kitchens of Bangkok and brings over 20 years of culinary expertise. Our kitchen staff consists of experienced Thai cooks who ensure every dish maintains authentic flavors. Our friendly service team is dedicated to making every guest feel like family.';
    contentDiv.appendChild(temp);

    temp = document.createElement('h2');
    temp.innerText = 'Hours of Operation';
    contentDiv.appendChild(temp);

    temp = document.createElement('p');
    temp.innerText = 'Monday - Thursday: 11:00 AM - 9:00 PM \n Friday - Saturday: 11:00 AM - 10:00 PM \n Sunday: 12:00 PM - 9:00 PM';
    contentDiv.appendChild(temp);

    temp = document.createElement('h2');
    temp.innerText = 'Location';
    contentDiv.appendChild(temp);

    temp = document.createElement('p');
    temp.innerText = '2518 Pearland Parkway, Pearland, TX 77581 \n Phone: (281) 485-8424';
    contentDiv.appendChild(temp);

    temp = document.createElement('button');
    temp.innerText = 'View Our Menu';
    temp.className = 'cta-button';
    temp.onclick = function() {populateMenuButton();};
    contentDiv.appendChild(temp);

    console.log('Finished populating the about page')
}