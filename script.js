document.getElementById('logo').innerHTML = 'FRESHY';
document.getElementById('navlink').innerHTML = 'Home';
document.getElementById('navlink2').innerHTML = 'Menu';
document.getElementById('navlink3').innerHTML = 'Products';
document.getElementById('navlink4').innerHTML = 'About Us';
document.getElementById('bigletter').innerHTML = 'G';
document.getElementById('herotitle').innerHTML = 'ROOTED IN NATURE. GROWN WITH CARE.';
document.getElementById('herodesc').innerHTML = 'Handmade, honest food with fresh farm-to-table roots that\'s both hearty and wholesome. Experience natural flavors, handpicked freshness, and a locally-nourished commitment to sustainable eating, one savory bite at a time.';
document.getElementById('farmtitle').innerHTML = 'FROM FARM TO YOUR CUTTING BOARD';
document.getElementById('selectiontitle').innerHTML = 'DISCOVER OUR FRESH SELECTION';
document.getElementById('selectiondesc').innerHTML = 'From the heart of the farm to your kitchen, explore a variety of fresh vegetables, fruits, dairy, and more—all ethically sourced and delivered with care.';
document.getElementById('selectionname').innerHTML = 'Quick Meals';
document.getElementById('selectionname2').innerHTML = 'Healthy Dishes';
document.getElementById('selectionname3').innerHTML = 'Family Favorites';
document.getElementById('mealtitle').innerHTML = 'Eat Well, Spend Less';
document.getElementById('mealname').innerHTML = 'One-Pot & Sheet-Pan Meals';
document.getElementById('mealbtn').innerHTML = 'Buy Now';
document.getElementById('mealname2').innerHTML = 'Ingredient or Less';
document.getElementById('mealbtn2').innerHTML = 'Buy Now';
document.getElementById('stocktitle').innerHTML = 'WHAT\'s IN STOCK';
document.getElementById('stockdesc').innerHTML = 'This type of product you can get from our local, so what is in stock?';
document.getElementById('contactlogo').innerHTML = 'FRESHY';
document.getElementById('contactdesc').innerHTML = 'For whom this platform was made, you really understand your needs. When you experience our health, family, and farm-friendly lifestyle sourcing farm-fresh produce, handmade dips & sauces, local meats, homemade breads & pastries, and more—all directly from farmers and small-scale food artisans. Together, we\'re working to build a better food system that is healthy, profitable, and sustainable for all.';
document.getElementById('contacttitle').innerHTML = 'CONTACT US';
document.getElementById('forminput').placeholder = 'Email';
document.getElementById('forminput2').placeholder = 'Full Name';
document.getElementById('submitbtn').innerHTML = 'SUBMIT';












let productsdata = [
    {
        name: "Organic Brocolli",
        category: "Vegetables",
        origin: "Local Farm",
        quality: "Premium",
        nutrition: "Rich in Vitamin C, potassium, and antioxidants",
        imagePath: "Images/download (22) (1) 1.png"
    },
    {
        name: "Fresh Carrots",
        category: "Root Vegetables", 
        origin: "Organic Garden",
        quality: "Grade A",
        nutrition: "High in Vitamin A, fiber, and beta-carotene",
        imagePath: "Images/download (23) (1) 1.png"
    },
    {
        name: "Farm Wheat",
        category: "Dairy & Eggs",
        origin: "Free-Range Farm", 
        quality: "Fresh",
        nutrition: "Excellent source of protein and Vitamin D",
        imagePath: "Images/Wheat (1) 1.png"
    },
    {
        name: "Green Peas",
        category: "Vegetables",
        origin: "Local Farm",
        quality: "Premium", 
        nutrition: "High in fiber, protein, and essential vitamins",
        imagePath: "Images/Ervilhas (Kg) (1) 1.png"
    },
    {
        name: "Potatoes",
        category: "Vegetables",
        origin: "Greenhouse Grown",
        quality: "Grade A",
        nutrition: "Rich in Vitamin C and antioxidants",
        imagePath: "Images/A Comprehensive List of _Deadly_ Nightshades (1) 1.png"
    },
    {
        name: "Red Onions",
        category: "Vegetables",
        origin: "Local Farm",
        quality: "Premium",
        nutrition: "Contains antioxidants and anti-inflammatory compounds",
        imagePath: "Images/Red Onion with Cut in Half Isolated on White Background_ Stock Image - Image of background, plant_ 105173215 (1) 1.png"
    }
];

let filteredproducts = productsdata;

document.getElementById("productsgrid").innerHTML += `
<div class="productcard">
    <div class="productimage" style="background-image: url('${productsdata[0].imagePath}')"></div>
    <div class="productinfo">
        <h1 class="productname">${productsdata[0].name}</h1>
        <div class="productmeta">
            <h1 class="productcategory">${productsdata[0].category}</h1>
            <div class="productdot"></div>
            <h1 class="productorigin">${productsdata[0].origin}</h1>
        </div>
        <h1 class="productnutrition">${productsdata[0].nutrition}</h1>
    </div>
</div>
`;

document.getElementById("productsgrid").innerHTML += `
<div class="productcard">
    <div class="productimage" style="background-image: url('${productsdata[1].imagePath}')"></div>
    <div class="productinfo">
        <h1 class="productname">${productsdata[1].name}</h1>
        <div class="productmeta">
            <h1 class="productcategory">${productsdata[1].category}</h1>
            <div class="productdot"></div>
            <h1 class="productorigin">${productsdata[1].origin}</h1>
        </div>
        <h1 class="productnutrition">${productsdata[1].nutrition}</h1>
    </div>
</div>
`;

document.getElementById("productsgrid").innerHTML += `
<div class="productcard">
    <div class="productimage" style="background-image: url('${productsdata[2].imagePath}')"></div>
    <div class="productinfo">
        <h1 class="productname">${productsdata[2].name}</h1>
        <div class="productmeta">
            <h1 class="productcategory">${productsdata[2].category}</h1>
            <div class="productdot"></div>
            <h1 class="productorigin">${productsdata[2].origin}</h1>
        </div>
        <h1 class="productnutrition">${productsdata[2].nutrition}</h1>
    </div>
</div>
`;

document.getElementById("productsgrid").innerHTML += `
<div class="productcard">
    <div class="productimage" style="background-image: url('${productsdata[3].imagePath}')"></div>
    <div class="productinfo">
        <h1 class="productname">${productsdata[3].name}</h1>
        <div class="productmeta">
            <h1 class="productcategory">${productsdata[3].category}</h1>
            <div class="productdot"></div>
            <h1 class="productorigin">${productsdata[3].origin}</h1>
        </div>
        <h1 class="productnutrition">${productsdata[3].nutrition}</h1>
    </div>
</div>
`;

document.getElementById("productsgrid").innerHTML += `
<div class="productcard">
    <div class="productimage" style="background-image: url('${productsdata[4].imagePath}')"></div>
    <div class="productinfo">
        <h1 class="productname">${productsdata[4].name}</h1>
        <div class="productmeta">
            <h1 class="productcategory">${productsdata[4].category}</h1>
            <div class="productdot"></div>
            <h1 class="productorigin">${productsdata[4].origin}</h1>
        </div>
        <h1 class="productnutrition">${productsdata[4].nutrition}</h1>
    </div>
</div>
`;

document.getElementById("productsgrid").innerHTML += `
<div class="productcard">
    <div class="productimage" style="background-image: url('${productsdata[5].imagePath}')"></div>
    <div class="productinfo">
        <h1 class="productname">${productsdata[5].name}</h1>
        <div class="productmeta">
            <h1 class="productcategory">${productsdata[5].category}</h1>
            <div class="productdot"></div>
            <h1 class="productorigin">${productsdata[5].origin}</h1>
        </div>
        <h1 class="productnutrition">${productsdata[5].nutrition}</h1>
    </div>
</div>
`;

for(i=0; i<6; i++){
    console.log(`Product ${i}: ${productsdata[i].name}`);
}

















function checkScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('show');
        }
    });
    
    const productCards = document.querySelectorAll('.productcard');
    productCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 100);
        }
    });
}

checkScroll();

window.addEventListener('scroll', checkScroll);










document.getElementById('navlink').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('navlink2').addEventListener('click', function() {
    window.location.href = 'menu.html'; 
});

document.getElementById('navlink3').addEventListener('click', function() {
    window.location.href = 'products.html';
});

document.getElementById('navlink4').addEventListener('click', function() {
    window.location.href = 'about.html';
});


document.getElementById('logo').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.getElementById('logo').style.cursor = 'pointer';


const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.navlink, .navlink2, .navlink3, .navlink4');

navLinks.forEach(link => {
    const linkText = link.innerHTML.toLowerCase().replace(' ', '');
    if ((currentPage === 'index.html' || currentPage === '') && linkText === 'home') {
        link.style.textDecoration = 'underline';
    } else if (currentPage === 'menu.html' && linkText === 'menu') {
        link.style.textDecoration = 'underline';
    } else if (currentPage === 'products.html' && linkText === 'products') {
        link.style.textDecoration = 'underline';
    } else if (currentPage === 'about.html' && linkText === 'aboutus') {
        link.style.textDecoration = 'underline';
    }
});