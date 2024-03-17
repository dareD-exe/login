function login(){
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Example of authentication (replace with your own logic)
    if (username === "Admin" && password === "Hello@123a") {
      window.location.href = "home.html";
    } else if (username === "Admin1" && password === "Hello@123a") {
      window.location.href = "home.html";
    } else {
      alert("Try again");
    }
  });
}




login()