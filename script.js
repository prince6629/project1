document.getElementById("rentForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const location = document.getElementById("location").value.toLowerCase();
    const size = parseInt(document.getElementById("size").value);
    const bhk = parseInt(document.getElementById("bhk").value);
    const furnishing = document.getElementById("furnishing").value;
  
    let baseRent = 5000;
  
    // Simple logic (replace with ML model via backend)
    if (location.includes("mumbai")) baseRent += 10000;
    else if (location.includes("bangalore")) baseRent += 8000;
    else baseRent += 5000;
  
    baseRent += size * 5 + bhk * 2000;
  
    if (furnishing === "furnished") baseRent += 3000;
    else if (furnishing === "semi-furnished") baseRent += 1500;
  
    document.getElementById("result").innerText = `Estimated Rent: ₹${baseRent.toLocaleString()}/month`;
  });
  