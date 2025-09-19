// Trail-Guide Web Application
// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('Trail-Guide application loaded successfully!');
    
    // Initialize application
    initializeApp();
});

function initializeApp() {
    // Set up navigation
    setupNavigation();
    
    // Set up interactive elements
    setupInteractiveElements();
    
    // Add scroll effects
    setupScrollEffects();
    
    console.log('Application initialized');
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Interactive elements setup
function setupInteractiveElements() {
    const getStartedBtn = document.getElementById('get-started-btn');
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            // Show welcome message
            showWelcomeMessage();
            
            // Scroll to about section
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = aboutSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add click effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}

// Scroll effects
function setupScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        
        // Add/remove shadow to header based on scroll
        if (scrolled > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Welcome message functionality
function showWelcomeMessage() {
    // Create a temporary message element
    const message = document.createElement('div');
    message.textContent = 'Welcome to Trail-Guide! Exploring the features below...';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #3498db;
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        font-size: 1.1rem;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(message);
    
    // Fade in
    setTimeout(() => {
        message.style.opacity = '1';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// Utility functions
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

function logActivity(activity) {
    console.log(`[${getCurrentTime()}] ${activity}`);
}

// Feature demonstration functions
function demonstrateFeatures() {
    logActivity('Demonstrating application features');
    
    const features = [
        'Responsive Design',
        'Modern CSS Styling',
        'Interactive JavaScript',
        'Smooth Scroll Navigation',
        'Dynamic Content'
    ];
    
    console.log('Available features:', features);
    return features;
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        setupNavigation,
        setupInteractiveElements,
        demonstrateFeatures
    };
}