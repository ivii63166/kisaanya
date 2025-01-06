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
        image: 'https://images.unsplash.com/photo-1585996960303-91ce6fd7dac5?w=800&q=80',
        healthBenefits: [
            'High protein content',
            'Aids in muscle growth',
            'Boosts energy'
        ],
        medicalBenefits: [
            'Good for heart health',
            'Helps in managing diabetes',
            'Supports bone strength'
        ]
    },
    'urad-pahadi': {
        name: 'Urad Pahadi',
        alsoKnownAs: 'Split Black Gram',
        price: '₹140/kg',
        image: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=800&q=80',
        healthBenefits: [
            'Improves bone density',
            'Enhances skin texture',
            'Rich in B vitamins'
        ],
        medicalBenefits: [
            'Supports liver function',
            'Aids in digestion',
            'Helps maintain healthy nervous system'
        ]
    },
    'kala-chana': {
        name: 'Kala Chana',
        alsoKnownAs: 'Black Chickpeas',
        price: '₹90/kg',
        image: 'https://images.unsplash.com/photo-1515594848784-77172e3f21c4?w=800&q=80',
        healthBenefits: [
            'Rich in protein and iron',
            'Supports weight loss',
            'High in dietary fiber'
        ],
        medicalBenefits: [
            'Boosts immunity',
            'Good for controlling blood sugar levels',
            'Improves gut health'
        ]
    },
    'pahadi-rajma': {
        name: 'Pahadi Rajma',
        alsoKnownAs: 'Hill Kidney Beans',
        price: '₹180/kg',
        image: 'https://images.unsplash.com/photo-1515594619304-49ddb12c8e63?w=800&q=80',
        healthBenefits: [
            'High in protein and fiber',
            'Supports digestion',
            'Rich in antioxidants'
        ],
        medicalBenefits: [
            'Reduces cholesterol',
            'Supports heart health',
            'Helps in weight management'
        ]
    },
    'urad-dal': {
        name: 'Urad Dal',
        alsoKnownAs: 'Split Black Gram',
        price: '₹140/kg',
        image: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=800&q=80',
        healthBenefits: [
            'Improves bone density',
            'Enhances skin texture',
            'Rich in B vitamins'
        ],
        medicalBenefits: [
            'Supports liver function',
            'Aids in digestion',
            'Helps maintain healthy nervous system'
        ]
    },
    'cauliflower': {
        name: 'Cauliflower (फूलगोभी)',
        alsoKnownAs: 'Gobhi',
        price: '₹40/kg',
        image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80',
        healthBenefits: [
            'Rich in vitamins C and K',
            'Promotes bone health',
            'Low in calories'
        ],
        medicalBenefits: [
            'Contains antioxidants that reduce inflammation',
            'Supports heart health',
            'Boosts immune system'
        ]
    },
    'pahadi-onions': {
        name: 'Pahadi Onions (पहाड़ी प्याज)',
        alsoKnownAs: 'Hill Onions',
        price: '₹35/kg',
        image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=800&q=80',
        healthBenefits: [
            'Boosts immunity',
            'Enhances metabolism',
            'Rich in antioxidants'
        ],
        medicalBenefits: [
            'Improves blood circulation',
            'Beneficial for heart health',
            'Anti-inflammatory properties'
        ]
    },
    'pahadi-potatoes': {
        name: 'Pahadi Potatoes (पहाड़ी आलू)',
        alsoKnownAs: 'Hill Potatoes',
        price: '₹30/kg',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80',
        healthBenefits: [
            'Rich in carbohydrates and potassium',
            'Provides energy',
            'Good source of fiber'
        ],
        medicalBenefits: [
            'Supports nerve function',
            'Good for muscle health',
            'Helps maintain blood pressure'
        ]
    },
    'orange-carrots': {
        name: 'Orange Carrots (संतरी गाजर)',
        alsoKnownAs: 'Gajar',
        price: '₹45/kg',
        image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=800&q=80',
        healthBenefits: [
            'High in beta-carotene',
            'Improves vision',
            'Rich in fiber'
        ],
        medicalBenefits: [
            'Good for skin health',
            'Boosts the immune system',
            'Supports eye health'
        ]
    },
    'round-radish': {
        name: 'Round Radish (गोल मूली)',
        alsoKnownAs: 'Mooli',
        price: '₹25/kg',
        image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=800&q=80',
        healthBenefits: [
            'Supports digestion',
            'Low in calories',
            'High in vitamin C'
        ],
        medicalBenefits: [
            'Detoxifies the liver',
            'Helps in managing jaundice',
            'Anti-inflammatory properties'
        ]
    },
    'sweet-peas': {
        name: 'Sweet Peas (मटर)',
        alsoKnownAs: 'Matar',
        price: '₹60/kg',
        image: 'https://images.unsplash.com/photo-1587735243664-acde286c5ff3?w=800&q=80',
        healthBenefits: [
            'High in protein and fiber',
            'Promotes gut health',
            'Rich in antioxidants'
        ],
        medicalBenefits: [
            'Good for heart health',
            'Regulates blood sugar levels',
            'Supports digestive health'
        ]
    },
    'gaderi': {
        name: 'Gaderi (गढ़ेरी)',
        alsoKnownAs: 'Taro Root',
        price: '₹50/kg',
        image: 'https://images.unsplash.com/photo-1591638246754-77e0fbcea96c?w=800&q=80',
        healthBenefits: [
            'Rich in dietary fiber',
            'Good for digestion',
            'High in minerals'
        ],
        medicalBenefits: [
            'Supports blood sugar control',
            'Boosts energy',
            'Improves digestive health'
        ]
    },
    'gethi': {
        name: 'Gethi (गेठी)',
        alsoKnownAs: 'Colocasia',
        price: '₹45/kg',
        image: 'https://images.unsplash.com/photo-1591638247744-77e0fbcea96c?w=800&q=80',
        healthBenefits: [
            'High in potassium',
            'Helps in maintaining electrolyte balance',
            'Good source of fiber'
        ],
        medicalBenefits: [
            'Beneficial for cardiovascular health',
            'Supports kidney function',
            'Helps in blood pressure regulation'
        ]
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