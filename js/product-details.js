// product-details.js

// Function to get the product ID from the URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('productId');
  }
  
  // Dummy data for products (for testing)
  const products = [
    { id: 1, name: 'Nike Air Max 270', price: 120, description: 'The Nike Air Max 270 features the first-ever Max Air unit created specifically for Nike Sportswear.', image: 'images/shoe-nike-airmax-black.jpg' },

    { id: 2, name: 'Adidas Ultraboost', price: 140, description: 'Adidas Ultraboost is known for its superior comfort and style.', image: 'images/shoe-adidas-ultraboost-white.jpg' },

    { id: 3, name: 'Puma RS-X Red', price: 110, description: 'Puma RS-X Red combines style with comfort.', image: 'images/shoe-puma-rsx-red.jpg' },

    { id: 4, name: 'Reebok Classic Blue', price: 95, description: 'Reebok Classic is a lifestyle shoe brand that consists of athletic shoes that became popular casual wear.', image: 'images/shoe-reebok-classic-blue.jpg' },

    { id: 5, name: 'Adidas Kids Pink', price: 60, description: 'Pink sneakers for girls offer comfort, stability and grip that give them the edge right from the start and help build the confidence to keep exploring.', image: 'images/shoe-adidas-kids-pink.jpg' },

    { id: 6, name: 'Apex Slipon Beige', price: 150, description: 'Apex shoes for men offer style, comfort, and durability altogether. From casual to formal, find your perfect pair.', image: 'images/shoe-apex-slipon-beige.jpg' },

    { id: 7, name: 'Bata Formal Brown', price: 200, description: 'A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection.', image: 'images/shoe-bata-formal-brown.jpg' },

    { id: 8, name: 'Converse High Black', price: 210, description: 'Converse are great for low-key activities like casual walking, sightseeing, or just hanging out.', image: 'images/shoe-converse-high-black.jpg' },

    { id: 9, name: 'Lotto Runner Grey', price: 175, description: 'Comfortable sports shoes with "old-newness" charm. Lotto logo on the side and on the tongue.', image: 'images/shoe-lotto-runner-grey.jpg' },

    { id: 10, name: 'Nike Revolution Grey', price: 80, description: 'The Nike Revolution running shoe combines cushioning, lightness and a minimalist design that ensures speed and all-day comfort.', image: 'images/shoe-nike-revolution-grey.jpg' },

    { id: 11, name: 'Skechers Dlites White', price: 160, description: 'Customers find these sneakers comfortable with thick, soft padding and appreciate that they fit true to size, particularly accommodating wide feet.', image: 'images/shoe-skechers-dlites-white.jpg' },

    { id: 12, name: 'Vans Old School', price: 40, description: 'The Old Skool was our first footwear design to showcase the famous Vans Sidestripe, although back then, it was just a random doodle drawn by founder Paul Van Doren.', image: 'images/shoe-vans-oldskool-check.jpg' },

  ];
  
  // Function to load product details based on the productId
  function loadProductDetails(productId) {
    const product = products.find(p => p.id === parseInt(productId)); // Find the product by ID
    if (product) {
      document.getElementById('product-name').innerText = product.name;
      document.getElementById('product-price').innerText = `$${product.price}`;
      document.getElementById('product-desc').innerText = product.description;
      document.getElementById('product-img').src = product.image;
    }
  }
  
  // Add to Cart functionality
function addToCart(productId, size, qty) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get existing cart or create empty one
      const cartItem = {
        productId: product.id,
        name: product.name,
        price: product.price,
        size: size,
        qty: qty,
      };
      
      // Add product to cart or update quantity if already in cart
      const existingItem = cart.find(item => item.productId === product.id && item.size === size);
      if (existingItem) {
        existingItem.qty += qty; // Update quantity if product is already in cart
      } else {
        cart.push(cartItem); // Add new product to cart
      }
      
      // Save cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // Show pop-up message
      alert(`${product.name} has been added to your cart!`);
    }
  }
  
  // Load product details when the page is loaded
  document.addEventListener('DOMContentLoaded', function () {
    const productId = getProductIdFromURL(); // Get productId from URL
    if (productId) {
      loadProductDetails(productId); // Load product details based on productId
    }
  
    // Event listener for Add to Cart button
    document.getElementById('add-to-cart').addEventListener('click', function () {
      const size = document.getElementById('size').value;
      const qty = parseInt(document.getElementById('qty').value);
      addToCart(productId, size, qty); // Call function to add to cart
    });
  });
  