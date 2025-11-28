document.getElementById('logo').innerHTML = 'FRESHY';
document.getElementById('navlink').innerHTML = 'Home';
document.getElementById('navlink2').innerHTML = 'Menu';
document.getElementById('navlink3').innerHTML = 'Products';
document.getElementById('navlink4').innerHTML = 'About Us';
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
    
    const menuCards = document.querySelectorAll('.menucard, .menusaladcard');
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