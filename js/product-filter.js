// product-filter.js

// Function to filter products by category
function filterByCategory(category) {
    const productCards = document.querySelectorAll('.product-card');
  
    productCards.forEach(card => {
      const productCategory = card.querySelector('.category').innerText.toLowerCase();
  
      // Show the product if it matches the category
      if (productCategory.includes(category.toLowerCase()) || category === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // Function to filter products by price range
  function filterByPrice(min, max) {
    const productCards = document.querySelectorAll('.product-card');
  
    productCards.forEach(card => {
      const productPrice = parseFloat(card.querySelector('.price').innerText.replace('$', ''));
  
      // Show the product if it falls within the price range
      if (productPrice >= min && productPrice <= max) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  // Event listeners for category and price filters
  document.querySelector('.category-filter').addEventListener('change', function(e) {
    filterByCategory(e.target.value);
  });
  
  document.querySelector('.price-filter').addEventListener('change', function(e) {
    const priceRange = e.target.value.split('-');
    filterByPrice(parseFloat(priceRange[0]), parseFloat(priceRange[1]));
  });
  