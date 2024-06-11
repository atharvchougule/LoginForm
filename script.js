document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("login-success-popup").classList.remove("hidden");
  });
  
  document.querySelector(".close-popup").addEventListener("click", function() {
    document.getElementById("login-success-popup").classList.add("hidden");
  });
  