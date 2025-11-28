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


document.getElementById('logo').innerHTML = 'FRESHY';
document.getElementById('navlink').innerHTML = 'Home';
document.getElementById('navlink2').innerHTML = 'Menu';
document.getElementById('navlink3').innerHTML = 'Products';
document.getElementById('navlink4').innerHTML = 'About Us';


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


document.getElementById('contactlogo').innerHTML = 'FRESHY';
document.getElementById('contactdesc').innerHTML = 'For whom this platform was made, you really understand your needs. When you experience our health, family, and farm-friendly lifestyle sourcing farm-fresh produce, handmade dips & sauces, local meats, homemade breads & pastries, and more—all directly from farmers and small-scale food artisans. Together, we\'re working to build a better food system that is healthy, profitable, and sustainable for all.';
document.getElementById('contacttitle').innerHTML = 'CONTACT US';
document.getElementById('forminput').placeholder = 'Email';
document.getElementById('forminput2').placeholder = 'Full Name';
document.getElementById('submitbtn').innerHTML = 'SUBMIT';


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
    const menuCards = document.querySelectorAll('.menucard, .menusaladcard');
    
    if (productCards.length > 0) {
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
    
    if (menuCards.length > 0) {
        menuCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                setTimeout(() => {
                    card.classList.add('show');
                }, index * 100);
            }
        });
    }
}

checkScroll();
window.addEventListener('scroll', checkScroll);


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


if (document.getElementById("productsgrid")) {
    document.getElementById("productsgrid").innerHTML = '';
    
    productsdata.forEach(product => {
        document.getElementById("productsgrid").innerHTML += `
        <div class="productcard">
            <div class="productimage" style="background-image: url('${product.imagePath}')"></div>
            <div class="productinfo">
                <h1 class="productname">${product.name}</h1>
                <div class="productmeta">
                    <h1 class="productcategory">${product.category}</h1>
                    <div class="productdot"></div>
                    <h1 class="productorigin">${product.origin}</h1>
                </div>
                <h1 class="productnutrition">${product.nutrition}</h1>
            </div>
        </div>
        `;
    });
    

    for(let i = 0; i < 6; i++) {
        console.log(`Product ${i}: ${productsdata[i].name}`);
    }
}


document.getElementById('bannerheading').innerHTML = 'FRESHNESS IN EVERY BITE';
document.getElementById('bannertext').innerHTML = 'Enjoy every day bite of nature with handpicked farm-fresh ingredients delivered straight to your table.';
document.getElementById('bannerbutton').innerHTML = 'BUY NOW';
document.getElementById('dishname').innerHTML = 'Mouthwatering Grilled Salmon';
document.getElementById('dishbtn').innerHTML = 'Order Now';
document.getElementById('dishname2').innerHTML = 'Colorful Salad Bowl';
document.getElementById('dishbtn2').innerHTML = 'Order Now';
document.getElementById('dishname3').innerHTML = 'Mexican Avocado Salad';
document.getElementById('dishbtn3').innerHTML = 'Order Now';
document.getElementById('dishname4').innerHTML = 'Mixed Sweet Fruit Salad';
document.getElementById('dishbtn4').innerHTML = 'Order Now';
document.getElementById('juiceheading').innerHTML = 'FRESH & NATURAL JUICIES';
document.getElementById('juicesubheading').innerHTML = 'Best Seller';
document.getElementById('juicetitle').innerHTML = 'Orange Bomb';
document.getElementById('juiceaction').innerHTML = 'Buy Now';
document.getElementById('juicetitle2').innerHTML = 'Cherry Spark';
document.getElementById('juiceaction2').innerHTML = 'Buy Now';
document.getElementById('juicetitle3').innerHTML = 'Lemon Fusion';
document.getElementById('juiceaction3').innerHTML = 'Buy Now';
document.getElementById('juicetitle4').innerHTML = 'Khawaja';
document.getElementById('juiceaction4').innerHTML = 'Buy Now';
document.getElementById('juicetitle5').innerHTML = 'Strawberry';
document.getElementById('juiceaction5').innerHTML = 'Buy Now';
document.getElementById('juicetitle6').innerHTML = 'Red Berry Mix';
document.getElementById('juiceaction6').innerHTML = 'Buy Now';
document.getElementById('offerheading').innerHTML = 'Get Free EBook';
document.getElementById('offerfield').placeholder = 'Name';
document.getElementById('offerfield2').placeholder = 'Email';
document.getElementById('offersubmit').innerHTML = 'SUBMIT';
document.getElementById('productheading').innerHTML = 'Categories';
document.getElementById('productlabel').innerHTML = 'Super healthy';
document.getElementById('productaction').innerHTML = 'Explore';
document.getElementById('productlabel2').innerHTML = 'Fresh Fruits';
document.getElementById('productaction2').innerHTML = 'Explore';
document.getElementById('productlabel3').innerHTML = 'Fresh Vegetables';
document.getElementById('productaction3').innerHTML = 'Explore';
document.getElementById('productlabel4').innerHTML = '100% Organic';
document.getElementById('productaction4').innerHTML = 'Explore';


document.getElementById('origintitle').innerHTML = 'WHERE IT ALL BEGAN';
document.getElementById('origintext').innerHTML = 'It had been a long time until we turned into this shape. This is a process that required patience and perseverance to be ready to do this.';
document.getElementById('journeyheading').innerHTML = 'HOW WE STARTED';
document.getElementById('journeypara').innerHTML = 'Within some rough dirt field under the humid sun on every windy day, crops are actually planted as well as carefully tended.';
document.getElementById('journeypara2').innerHTML = 'We began With one goal: to make every meal feel like brilliant effort, we\'ve stayed followed this good food comes from good ingredients and a little heart.';
document.getElementById('drinkheading').innerHTML = 'SIP THE JOY OF FRESHNESS!';
document.getElementById('drinkpara').innerHTML = 'Quench your thirst with nature\'s finest—our pure, organic juices, made from Genuinely planted and fruits just for you!';
document.getElementById('favoriteheading').innerHTML = 'OUR COSTUMER\'S FAVORITE WRAP';
document.getElementById('favoritepara').innerHTML = 'A fresh, healthy, and vibrant meal bursting with flavor and packed with wholesome ingredients, loved by our customers.';
document.getElementById('orderbutton').innerHTML = 'Order Now';
document.getElementById('specialheading').innerHTML = 'YES... IT\'S BROCCOLI ICE CREAM';
document.getElementById('specialpara').innerHTML = 'Sweet, creamy, and a little more quirky than the crowd that everyday tale would never try. a healthy twist that lifts, shocks, and excites, with every scoop, surprises, one scoop.';
document.getElementById('reviewlabel').innerHTML = 'WHAT PEOPLE SAY ABOUT US';
document.getElementById('reviewheading').innerHTML = 'HEAR FROM OUR HAPPY CUSTOMERS';
document.getElementById('reviewquote').innerHTML = 'Everything about this is love & fresh. The ingredients are so healthy, wholesome, and the people behind this care truly. I\'ve got to share with everyone what they\'re cooking!';


document.getElementById('menuherotitle').innerHTML = 'FARM-FRESH FLAVORS';
document.getElementById('menuherodesc').innerHTML = 'Explore our handcrafted menu featuring the freshest ingredients from local farms. Every dish tells a story of sustainable farming and wholesome goodness.';


document.getElementById('menucategoryname').innerHTML = 'Main Dishes';
document.getElementById('menucategoryname2').innerHTML = 'Salads';
document.getElementById('menucategoryname3').innerHTML = 'Beverages';
document.getElementById('menucategoryname4').innerHTML = 'Desserts';


document.getElementById('menuitemstitle').innerHTML = 'MAIN DISHES';
document.getElementById('menutitle').innerHTML = 'Grilled Farm Chicken';
document.getElementById('menudesc').innerHTML = 'Free-range chicken seasoned with herbs from our garden, served with roasted seasonal vegetables';
document.getElementById('menuprice').innerHTML = '$18.99';

document.getElementById('menutitle2').innerHTML = 'Harvest Bowl';
document.getElementById('menudesc2').innerHTML = 'Quinoa, roasted vegetables, chickpeas, and tahini dressing - a complete farm-fresh meal';
document.getElementById('menuprice2').innerHTML = '$14.99';

document.getElementById('menutitle3').innerHTML = 'Farm-to-Table Pasta';
document.getElementById('menudesc3').innerHTML = 'Homemade pasta with fresh tomatoes, basil, and locally sourced parmesan cheese';
document.getElementById('menuprice3').innerHTML = '$16.99';

document.getElementById('menutitle4').innerHTML = 'Sustainable Salmon';
document.getElementById('menudesc4').innerHTML = 'Wild-caught salmon with lemon butter, served with organic greens and sweet potato mash';
document.getElementById('menuprice4').innerHTML = '$22.99';


document.getElementById('menusaladstitle').innerHTML = 'FRESH SALADS';
document.getElementById('menusaladname').innerHTML = 'Garden Greens Mix';
document.getElementById('menusaladdesc').innerHTML = 'Mixed lettuce, cherry tomatoes, cucumber, and house vinaigrette';
document.getElementById('menusaladprice').innerHTML = '$9.99';

document.getElementById('menusaladname2').innerHTML = 'Mediterranean Bowl';
document.getElementById('menusaladdesc2').innerHTML = 'Feta cheese, olives, tomatoes, cucumber, red onion with olive oil';
document.getElementById('menusaladprice2').innerHTML = '$11.99';

document.getElementById('menusaladname3').innerHTML = 'Caesar Classic';
document.getElementById('menusaladdesc3').innerHTML = 'Romaine lettuce, homemade croutons, parmesan, classic caesar dressing';
document.getElementById('menusaladprice3').innerHTML = '$10.99';


document.getElementById('menudrinkstitle').innerHTML = 'REFRESHING BEVERAGES';
document.getElementById('menudrinkname').innerHTML = 'Fresh Orange Juice';
document.getElementById('menudrinkprice').innerHTML = '$5.99';

document.getElementById('menudrinkname2').innerHTML = 'Green Detox Smoothie';
document.getElementById('menudrinkprice2').innerHTML = '$7.99';

document.getElementById('menudrinkname3').innerHTML = 'Berry Blast';
document.getElementById('menudrinkprice3').innerHTML = '$6.99';

document.getElementById('menudrinkname4').innerHTML = 'Lemon Mint Cooler';
document.getElementById('menudrinkprice4').innerHTML = '$4.99';


document.getElementById('menudealstitle').innerHTML = 'SPECIAL COMBO DEAL';
document.getElementById('menudealsdesc').innerHTML = 'Get more for less with our specially curated meal combinations';
document.getElementById('menudealname').innerHTML = 'Family Feast Package';
document.getElementById('menudealdesc').innerHTML = 'Choose any 2 main dishes, 2 salads, and 4 beverages. Perfect for sharing with loved ones. Save 20% on this combo!';
document.getElementById('menudealbtn').innerHTML = 'Order Now - $49.99';