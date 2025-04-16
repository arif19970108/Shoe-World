// main.js

// Toggle the visibility of the search input when clicking the search icon
document.querySelector('.header-icons img').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    // Toggle search bar visibility
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
      searchInput.style.display = 'block'; // Show the search input
    } else {
      searchInput.style.display = 'none'; // Hide the search input
    }
  });
  
  // Function to filter products based on search query
  function filterProducts(searchQuery) {
    const allProducts = document.querySelectorAll('.product-card'); // Get all product cards
    allProducts.forEach(product => {
      const productName = product.querySelector('h3').textContent.toLowerCase(); // Get product name
      if (productName.includes(searchQuery.toLowerCase())) {
        product.style.display = 'block'; // Show product if matches search
      } else {
        product.style.display = 'none'; // Hide product if does not match search
      }
    });
  }
  
  // Event listener for the search input
  document.getElementById('search-input').addEventListener('input', function (e) {
    const searchQuery = e.target.value;
    filterProducts(searchQuery); // Call filter function
  });
  