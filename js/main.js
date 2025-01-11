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
    },
    'masoor-dal': {
        name: 'Masoor Dal',
        alsoKnownAs: 'Red Lentils',
        price: '₹140/kg',
        image: 'assets/images_products/masoor dal.webp',
        healthBenefits: [
            'Rich in protein and fiber',
            'Low in calories',
            'High in iron'
        ],
        medicalBenefits: [
            'Helps in weight management',
            'Good for heart health',
            'Improves digestion'
        ],
        category: 'pulses'
    },
    'arhar-dal': {
        name: 'Arhar Dal',
        alsoKnownAs: 'Toor Dal/Pigeon Pea',
        price: '₹250/kg',
        image: 'assets/images_products/Arhar dal.webp',
        healthBenefits: [
            'High protein content',
            'Rich in dietary fiber',
            'Good source of minerals'
        ],
        medicalBenefits: [
            'Supports bone health',
            'Helps in diabetes management',
            'Boosts immunity'
        ],
        category: 'pulses'
    },
    'moong-dal': {
        name: 'Moong Dal',
        alsoKnownAs: 'Green Gram',
        price: '₹170/kg',
        image: 'assets/images_products/Moong dal.webp',
        healthBenefits: [
            'Easy to digest',
            'High in protein',
            'Rich in antioxidants'
        ],
        medicalBenefits: [
            'Good for heart health',
            'Helps in weight loss',
            'Controls blood sugar'
        ],
        category: 'pulses'
    },
    'urad-dal': {
        name: 'Urad Dal',
        alsoKnownAs: 'Black Gram',
        price: '₹250/kg',
        image: 'assets/images_products/Urad dal.webp',
        healthBenefits: [
            'High in protein',
            'Rich in iron',
            'Good source of folic acid'
        ],
        medicalBenefits: [
            'Strengthens nervous system',
            'Improves digestive health',
            'Boosts energy levels'
        ],
        category: 'pulses'
    }
};

// Remove the old product card click handlers and add new ones
document.querySelectorAll('.product-card').forEach(card => {
    const productImage = card.querySelector('.product-image');
    const productId = card.dataset.product;
    
    productImage.addEventListener('click', () => {
        showProductModal(productId);
    });
});

function showProductModal(productId) {
    const modal = document.getElementById('product-modal');
    document.body.classList.add('modal-open');
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
    
    // Set up add to cart button
    const addToCartBtn = modal.querySelector('.add-to-cart-btn');
    addToCartBtn.dataset.name = data.name;
    addToCartBtn.dataset.price = parseInt(data.price);
    
    // Show modal
    modal.style.display = 'block';
    
    // Set up quantity controls
    const qtyInput = modal.querySelector('.qty-input');
    const minusBtn = modal.querySelector('.qty-btn.minus');
    const plusBtn = modal.querySelector('.qty-btn.plus');
    
    minusBtn.onclick = (e) => {
        e.stopPropagation();
        const currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) qtyInput.value = currentValue - 1;
    };
    
    plusBtn.onclick = (e) => {
        e.stopPropagation();
        qtyInput.value = parseInt(qtyInput.value) + 1;
    };
    
    // Add to cart handler
    addToCartBtn.onclick = (e) => {
        e.stopPropagation();
        const name = data.name;
        const price = parseInt(data.price);
        const quantity = parseInt(qtyInput.value);
        const image = data.image;
        
        addToCart(name, price, quantity, image);
        modal.style.display = 'none';
    };
}

// Update modal close handlers
document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').style.display = 'none';
        document.body.classList.remove('modal-open');
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.classList.remove('modal-open');
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

// Add this after your existing JavaScript

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Cart icon click handler
document.querySelector('.cart-icon').addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    updateCartDisplay();
    cartModal.style.display = 'block';
});

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="material-icons">shopping_cart</i>
                <p>Your cart is empty</p>
            </div>
        `;
        totalPrice.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price} × ${item.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <p>₹${itemTotal}</p>
                    <button onclick="removeFromCart('${item.name}')" class="remove-item">&times;</button>
                </div>
            </div>
        `;
    });
    
    totalPrice.textContent = total;
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function addToCart(name, price, quantity, image) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name,
            price,
            quantity,
            image
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

// Initialize cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all Add to Cart buttons
    document.querySelectorAll('.product-card').forEach(card => {
        const addButton = card.querySelector('.add-to-cart-btn');
        const qtyInput = card.querySelector('.qty-input');
        const minusBtn = card.querySelector('.qty-btn.minus');
        const plusBtn = card.querySelector('.qty-btn.plus');
        
        if (addButton && qtyInput && minusBtn && plusBtn) {
            // Quantity controls
            minusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const currentValue = parseInt(qtyInput.value);
                if (currentValue > 1) qtyInput.value = currentValue - 1;
            });
            
            plusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                qtyInput.value = parseInt(qtyInput.value) + 1;
            });
            
            // Add to cart
            addButton.addEventListener('click', (e) => {
                e.stopPropagation();
                const name = addButton.dataset.name;
                const price = parseInt(addButton.dataset.price);
                const quantity = parseInt(qtyInput.value);
                const image = card.querySelector('.product-image img').src;
                
                addToCart(name, price, quantity, image);
            });
        }
    });

    // Modal close functionality
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeBtn.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Initialize cart count
    updateCartCount();
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add click handler for product images
    document.querySelectorAll('.product-image').forEach(image => {
        image.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = image.closest('.product-card');
            
            // Remove active class from all other cards
            document.querySelectorAll('.product-card').forEach(c => {
                if (c !== card) c.classList.remove('active');
            });
            
            // Toggle active class on clicked card
            card.classList.toggle('active');
        });
    });

    // Close product actions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.product-card')) {
            document.querySelectorAll('.product-card').forEach(card => {
                card.classList.remove('active');
            });
        }
    });

    // Prevent product actions from closing when clicking inside them
    document.querySelectorAll('.product-actions').forEach(actions => {
        actions.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});

// Update the checkout form handler
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.textContent = 'Processing...';
    submitButton.disabled = true;
    
    const formData = {
        name: document.getElementById('customer-name').value,
        email: document.getElementById('customer-email').value,
        phone: document.getElementById('customer-phone').value,
        address: document.getElementById('customer-address').value
    };

    // Format order details in a table-like structure
    const orderDetails = cart.map(item => 
        `• ${item.name}\n  Quantity: ${item.quantity}\n  Price: ₹${item.price}\n  Total: ₹${item.price * item.quantity}`
    ).join('\n\n');

    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Send email using EmailJS
    emailjs.send(
        'service_id',  // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        {
            to_name: 'Kisaanya Team',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            address: formData.address,
            order_details: orderDetails,
            total_amount: `₹${totalAmount}`,
            reply_to: formData.email,
            subject: `New Order from ${formData.name}`
        }
    )
    .then(function(response) {
        if(response.status === 200) {
            alert('Order placed successfully! We will contact you shortly.');
            cart = [];
            localStorage.removeItem('cart');
            updateCartDisplay();
            updateCartCount();
            document.getElementById('cart-modal').style.display = 'none';
            document.getElementById('checkout-form').reset();
        } else {
            throw new Error('Email sending failed');
        }
    })
    .catch(function(error) {
        console.error('Failed:', error);
        alert('There was an error processing your order. Please try again or contact us directly at farmers@kisaanya.com');
    })
    .finally(function() {
        submitButton.textContent = 'Proceed to Checkout';
        submitButton.disabled = false;
    });
});

// Add scroll effects
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    
    // Header scroll effect
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        backToTop.classList.add('visible');
    } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('visible');
    }
});

// Smooth scroll for back to top
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.product-card, .about-content, .contact-card').forEach(el => {
    observer.observe(el);
});

// Add hover effect for product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});