document.getElementById('logo').innerHTML = 'FRESHY';
document.getElementById('navlink').innerHTML = 'Home';
document.getElementById('navlink2').innerHTML = 'Menu';
document.getElementById('navlink3').innerHTML = 'Products';
document.getElementById('navlink4').innerHTML = 'About Us';
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
    window.location.href = 'menu.html'; // New 4th page
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