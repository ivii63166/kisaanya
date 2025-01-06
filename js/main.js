// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate menu toggle
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header')) {
            navLinks.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                navLinks.classList.remove('active');
            }
        });
    });
});

// Add this to your existing JavaScript
const productData = {
    'bhat-dal': {
        name: 'Bhat ki Dal',
        alsoKnownAs: 'Black Soybean',
        price: '₹120/kg',
        image: 'assets/images_products/Bhat_ki_Dal.png',
        healthBenefits: [
            'High protein content',
            'Aids in muscle growth',
            'Boosts energy'
        ],
        medicalBenefits: [
            'Good for heart health',
            'Helps in managing diabetes',
            'Supports bone strength'
        ],
        category: 'pulses'
    },
    'urad-pahadi': {
        name: 'Urad Pahadi',
        alsoKnownAs: 'Split Black Gram',
        price: '₹140/kg',
        image: 'assets/images_products/Urad_Pahadi.png',
        healthBenefits: [
            'Improves bone density',
            'Enhances skin texture',
            'Rich in B vitamins'
        ],
        medicalBenefits: [
            'Supports liver function',
            'Aids in digestion',
            'Helps maintain healthy nervous system'
        ],
        category: 'pulses'
    },
    'kala-chana': {
        name: 'Kala Chana',
        alsoKnownAs: 'Black Chickpeas',
        price: '₹90/kg',
        image: 'assets/images_products/Kala_Chana.png',
        healthBenefits: [
            'Rich in protein and iron',
            'Supports weight loss',
            'High in dietary fiber'
        ],
        medicalBenefits: [
            'Boosts immunity',
            'Good for controlling blood sugar levels',
            'Improves gut health'
        ],
        category: 'pulses'
    },
    'pahadi-rajma': {
        name: 'Pahadi Rajma',
        alsoKnownAs: 'Red Kidney Beans',
        price: '₹180/kg',
        image: 'assets/images_products/Pahadi_Rajma.png',
        healthBenefits: [
            'High in protein',
            'Rich in antioxidants',
            'Good source of fiber'
        ],
        medicalBenefits: [
            'Supports heart health',
            'Helps in blood sugar control',
            'Improves digestion'
        ],
        category: 'pulses'
    },
    'urad-dal': {
        name: 'Urad Dal',
        alsoKnownAs: 'Split Black Gram',
        price: '₹140/kg',
        image: 'assets/images_products/Urad_Pahadi.png',
        healthBenefits: [
            'High in protein',
            'Rich in iron',
            'Good source of folic acid'
        ],
        medicalBenefits: [
            'Helps in nerve function',
            'Supports digestive health',
            'Maintains healthy blood pressure'
        ],
        category: 'pulses'
    },
    'cauliflower': {
        name: 'Cauliflower',
        alsoKnownAs: 'Gobhi',
        price: '₹40/kg',
        image: 'assets/images_products/Cauliflower.png',
        healthBenefits: [
            'Rich in vitamins C and K',
            'Promotes bone health',
            'Low in calories'
        ],
        medicalBenefits: [
            'Contains antioxidants',
            'Reduces inflammation',
            'Supports heart health'
        ],
        category: 'vegetables'
    },
    'pahadi-onions': {
        name: 'Pahadi Onions',
        alsoKnownAs: 'Hill Onions',
        price: '₹35/kg',
        image: 'assets/images_products/Pahadi_Onions.png',
        healthBenefits: [
            'Boosts immunity',
            'Enhances metabolism',
            'Rich in antioxidants'
        ],
        medicalBenefits: [
            'Improves blood circulation',
            'Beneficial for heart health',
            'Anti-inflammatory properties'
        ],
        category: 'vegetables'
    },
    'pahadi-potatoes': {
        name: 'Pahadi Potatoes',
        alsoKnownAs: 'Hill Potatoes',
        price: '₹30/kg',
        image: 'assets/images_products/Pahadi_Potatoes.png',
        healthBenefits: [
            'Rich in carbohydrates',
            'High in potassium',
            'Provides energy'
        ],
        medicalBenefits: [
            'Supports nerve function',
            'Good for muscle health',
            'Helps maintain blood pressure'
        ],
        category: 'vegetables'
    },
    'orange-carrots': {
        name: 'Orange Carrots',
        alsoKnownAs: 'Gajar',
        price: '₹45/kg',
        image: 'assets/images_products/Orange_Carrots.png',
        healthBenefits: [
            'High in beta-carotene',
            'Improves vision',
            'Rich in fiber'
        ],
        medicalBenefits: [
            'Good for skin health',
            'Boosts immune system',
            'Supports eye health'
        ],
        category: 'fruits'
    },
    'round-radish': {
        name: 'Round Radish',
        alsoKnownAs: 'Mooli',
        price: '₹25/kg',
        image: 'assets/images_products/Round_Radish.png',
        healthBenefits: [
            'Supports digestion',
            'Low in calories',
            'Rich in vitamins'
        ],
        medicalBenefits: [
            'Detoxifies liver',
            'Helps in managing jaundice',
            'Anti-inflammatory properties'
        ],
        category: 'vegetables'
    },
    'sweet-peas': {
        name: 'Sweet Peas',
        alsoKnownAs: 'Matar',
        price: '₹60/kg',
        image: 'assets/images_products/Sweet_Peas.png',
        healthBenefits: [
            'High in protein and fiber',
            'Promotes gut health',
            'Rich in vitamins'
        ],
        medicalBenefits: [
            'Good for heart health',
            'Regulates blood sugar',
            'Supports immune system'
        ],
        category: 'pulses'
    },
    'gaderi': {
        name: 'Gaderi',
        alsoKnownAs: 'Taro Root',
        price: '₹50/kg',
        image: 'assets/images_products/Gaderi.png',
        healthBenefits: [
            'Rich in dietary fiber',
            'Good for digestion',
            'High in minerals'
        ],
        medicalBenefits: [
            'Supports blood sugar control',
            'Boosts energy',
            'Improves digestive health'
        ],
        category: 'pulses'
    },
    'gethi': {
        name: 'Gethi (गेठी)',
        alsoKnownAs: 'Colocasia',
        price: '₹45/kg',
        image: 'assets/images_products/Gethi.png',
        healthBenefits: [
            'High in potassium',
            'Helps in maintaining electrolyte balance',
            'Good source of fiber'
        ],
        medicalBenefits: [
            'Beneficial for cardiovascular health',
            'Supports kidney function',
            'Helps in blood pressure regulation'
        ],
        category: 'pulses'
    }
};

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const productId = card.dataset.product;
        showProductModal(productId);
    });
});

function showProductModal(productId) {
    const modal = document.getElementById('product-modal');
    const data = productData[productId];
    
    // Fill modal with product data
    modal.querySelector('.modal-image img').src = data.image;
    modal.querySelector('.modal-details h2').textContent = data.name;
    modal.querySelector('.also-known').textContent = `Also Known As: ${data.alsoKnownAs}`;
    modal.querySelector('.modal-price').textContent = data.price;
    
    // Fill benefits lists
    const healthList = modal.querySelector('.health-benefits');
    const medicalList = modal.querySelector('.medical-benefits');
    
    healthList.innerHTML = data.healthBenefits.map(benefit => `<li>${benefit}</li>`).join('');
    medicalList.innerHTML = data.medicalBenefits.map(benefit => `<li>${benefit}</li>`).join('');
    
    modal.style.display = 'block';
}

// Close modal when clicking the close button or outside
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('product-modal').style.display = 'none';
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('product-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Quantity selector functionality
document.querySelector('.qty-btn.minus').addEventListener('click', () => {
    const input = document.querySelector('.qty-input');
    if (input.value > 1) input.value--;
});

document.querySelector('.qty-btn.plus').addEventListener('click', () => {
    const input = document.querySelector('.qty-input');
    input.value++;
});

// Update the modal close functionality to prevent closing when clicking inside the modal
document.querySelector('.modal-content').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Product filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
});