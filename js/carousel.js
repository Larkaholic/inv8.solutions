// Company logos carousel
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('companiesCarousel');
    const track = document.querySelector('.carousel-track');
    const companies = document.querySelectorAll('.company-item');
    
    if (!carousel || !track || companies.length === 0) return;
    
    let currentIndex = 0;
    const itemWidth = companies[0].offsetWidth + 50; // item width + gap
    const visibleItems = window.innerWidth < 768 ? 3 : 9; // 3 on mobile, 5 on desktop
    const maxIndex = Math.max(0, companies.length - visibleItems);
    
    // Auto-slide functionality
    function slideNext() {
        currentIndex = (currentIndex + 1) % (companies.length - visibleItems + 1);
        if (currentIndex > maxIndex) {
            currentIndex = 0;
        }
        updateCarousel();
    }
    
    function updateCarousel() {
        const translateX = -currentIndex * itemWidth;
        track.style.transform = `translateX(${translateX}px)`;
    }
    
    // Auto-slide every 3 seconds
    setInterval(slideNext, 1000);
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            const newItemWidth = companies[0].offsetWidth + 32;
            if (newItemWidth !== itemWidth) {
                location.reload(); // Simple solution for responsive changes
            }
        }, 250);
    });
    
    // Pause on hover
    carousel.addEventListener('mouseenter', function() {
        carousel.style.animationPlayState = 'paused';
    });
    
    carousel.addEventListener('mouseleave', function() {
        carousel.style.animationPlayState = 'running';
    });
});
