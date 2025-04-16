// cart.js

// Function to load cart from localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('.cart-table tbody');
    cartTableBody.innerHTML = ''; 
    
    let grandTotal = 0;
  
    // Loop through each product in the cart
    cart.forEach(item => {
      const row = document.createElement('tr');
      
      const productImagePath = item.image || 'images/default-image.jpg'; 
      
      // Create table row with product image, name, price, total, and remove button
      row.innerHTML = `
        <td><img src="${productImagePath}" alt="${item.name}" class="cart-img" /></td>
        <td>${item.name}</td>
        <td><input type="number" value="${item.qty}" min="1" class="qty-input" data-id="${item.productId}" /></td>
        <td>$${item.price}</td>
        <td>$${(item.price * item.qty).toFixed(2)}</td>
        <td><button class="remove-btn" data-id="${item.productId}">Remove</button></td>
      `;
      
      cartTableBody.appendChild(row);
  
      // Calculate the grand total
      grandTotal += item.price * item.qty;
    });
  
    // Show the grand total
    document.getElementById('grand-total').innerText = `$${grandTotal.toFixed(2)}`;
}
  
// Event listener to remove items from the cart
document.querySelector('.cart-table').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn')) {
        const productId = e.target.dataset.id;
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
        // Remove the product from the cart
        const updatedCart = cart.filter(item => item.productId !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save the updated cart
  
        loadCart(); // Reload the cart
    }
});
  
// Event listener for quantity input changes
document.querySelector('.cart-table').addEventListener('input', function (e) {
    if (e.target.classList.contains('qty-input')) {
        const productId = e.target.dataset.id;
        const newQty = parseInt(e.target.value);
  
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cart.find(item => item.productId === productId);
  
        // Update the product quantity in the cart
        if (item) {
            item.qty = newQty;
            localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart
            loadCart(); // Reload the cart with updated quantities
        }
    }
});
  
// Function to initialize the cart page when it's loaded
window.onload = function() {
    if (localStorage.getItem('cart')) {
        loadCart(); // Load cart items from localStorage
    }
};
