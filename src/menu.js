let contentDiv = document.getElementById('content');

export function populateMenu(){
    console.log('Populating the menu page')
    
    let temp;

    temp = document.createElement('h1');
    temp.innerText = 'Thaicoon Restaurant Menu';
    contentDiv.appendChild(temp);
    
    temp = document.createElement('h2')
    temp.innerText = 'Appetizers';
    contentDiv.appendChild(temp);

    temp = document.createElement('div')
    temp.className = 'menu-category';
    contentDiv.appendChild(temp);
    
    let menuCategoryDiv = temp;
    
    temp = document.createElement('p');
    temp.innerText = 'Spring Rolls (2 pieces): Fresh vegetables wrapped in rice paper, served with peanut sauce - $6.95';
    menuCategoryDiv.appendChild(temp);
    temp = document.createElement('p')
    temp.innerText = 'Thai Chicken Satay (4 skewers): Grilled marinated chicken with peanut sauce and cucumber salad - $8.95';
    menuCategoryDiv.appendChild(temp);
    temp = document.createElement('p')
    temp.innerText = 'Crispy Calamari: Lightly battered squid rings with sweet chili sauce - $9.95';
    menuCategoryDiv.appendChild(temp);

    temp = document.createElement('h2')
    temp.innerText = 'Soups';
    contentDiv.appendChild(temp);

    temp = document.createElement('div')
    temp.className = 'menu-category';
    contentDiv.appendChild(temp);
    
    menuCategoryDiv = temp;
    
    temp = document.createElement('p');
    temp.innerText = 'Tom Yum Goong: Spicy and sour soup with shrimp, mushrooms, and lemongrass - $7.95';
    menuCategoryDiv.appendChild(temp);
    temp = document.createElement('p')
    temp.innerText = 'Tom Kha Gai: Coconut chicken soup with galangal and lime leaves - $7.95';
    menuCategoryDiv.appendChild(temp);

    temp = document.createElement('h2')
    temp.innerText = 'Main Dishes';
    contentDiv.appendChild(temp);

    temp = document.createElement('div')
    temp.className = 'menu-category';
    contentDiv.appendChild(temp);
    
    menuCategoryDiv = temp;
    
    temp = document.createElement('p');
    temp.innerText = 'Pad Thai: Stir-fried rice noodles with tofu, bean sprouts, and tamarind sauce - $12.95';
    menuCategoryDiv.appendChild(temp);
    temp = document.createElement('p')
    temp.innerText = 'Green Curry: Authentic Thai green curry with bamboo shoots and basil - $13.95';
    menuCategoryDiv.appendChild(temp);
    temp = document.createElement('p')
    temp.innerText = 'Massaman Curry: Rich and mild curry with potatoes and peanuts - $14.95';
    menuCategoryDiv.appendChild(temp);
    temp = document.createElement('p')
    temp.innerText = 'Thai Basil Stir-fry: Fresh basil, bell peppers, and onions in garlic sauce - $12.95';
    menuCategoryDiv.appendChild(temp);

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

    console.log('Finished populating the menu page')
}