// Product Gallery Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Product Gallery
    const mainImage = document.getElementById('main-product-image');
    const thumbnailBtns = document.querySelectorAll('.thumbnail-btn');
    
    thumbnailBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Update main image
        mainImage.src = this.getAttribute('data-image');
        
        // Update active thumbnail
        thumbnailBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Size Selection
    const sizeBtns = document.querySelectorAll('.size-btn');
    
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Update active size
        sizeBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Quantity Selector
    const minusBtn = document.querySelector('.minus-btn');
    const plusBtn = document.querySelector('.plus-btn');
    const quantityInput = document.getElementById('quantity-input');
    
    minusBtn.addEventListener('click', function() {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
    
    plusBtn.addEventListener('click', function() {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
    
    // Add to Cart Button
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    
    addToCartBtn.addEventListener('click', function() {
      // Add 'added' class for success animation
      this.classList.add('added');
      this.innerHTML = '<i class="fas fa-check"></i><span>Added to cart</span>';
      
      // Reset button after 2 seconds
      setTimeout(() => {
        this.classList.remove('added');
        this.innerHTML = '<i class="fas fa-shopping-cart"></i><span>Add to cart</span>';
      }, 2000);
    });
    
    // Size Chart Modal
    const modal = document.getElementById('size-chart-modal');
    const sizeChartBtn = document.getElementById('size-chart-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    sizeChartBtn.addEventListener('click', function() {
      modal.classList.add('show');
      setTimeout(() => {
        modal.classList.add('fade-in');
      }, 10);
    });
    
    closeModalBtn.addEventListener('click', function() {
      modal.classList.remove('fade-in');
      setTimeout(() => {
        modal.classList.remove('show');
      }, 300);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.classList.remove('fade-in');
        setTimeout(() => {
          modal.classList.remove('show');
        }, 300);
      }
    });
    
    // Recommended Products Scroll
    const recommendedProducts = document.getElementById('recommended-products');
    const scrollLeftBtn = document.querySelector('.scroll-left-btn');
    const scrollRightBtn = document.querySelector('.scroll-right-btn');
    
    scrollLeftBtn.addEventListener('click', function() {
      recommendedProducts.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    });
    
    scrollRightBtn.addEventListener('click', function() {
      recommendedProducts.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    });
  });