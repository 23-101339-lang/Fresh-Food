document.getElementById('logo').innerHTML = 'FRESHY';
document.getElementById('navlink').innerHTML = 'Home';
document.getElementById('navlink2').innerHTML = 'Menu';
document.getElementById('navlink3').innerHTML = 'Products';
document.getElementById('navlink4').innerHTML = 'About Us';
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