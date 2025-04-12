function calculateRevenue() {
    var productPrice = parseInt(document.getElementById("product-price").value);
    var quantity = parseInt(document.getElementById("quantity").value);
    var additionalFees = parseInt(document.getElementById("additional-fees").value);
  
    var subtotal = productPrice * quantity;
    var totalRevenue = subtotal + additionalFees;
    var tax = totalRevenue * 0.12;
    var finalRevenue = totalRevenue + tax;
  
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("total-revenue").textContent = totalRevenue.toFixed(2);
    document.getElementById("tax").textContent = tax.toFixed(2);
    document.getElementById("final-revenue").textContent = finalRevenue.toFixed(2);
}