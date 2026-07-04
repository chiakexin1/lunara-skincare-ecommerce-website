function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("lunara_user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    localStorage.setItem("lunara_logged_in", "true");
    redirectAfterLogin();
  } else {
    alert("Invalid login details!");
  }
}

function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!email || !password) {
    alert("Please enter valid email and password");
    return;
  }

  const newUser = { email, password };
  localStorage.setItem("lunara_user", JSON.stringify(newUser));
  localStorage.setItem("lunara_logged_in", "true");

  redirectAfterLogin();
}

function continueGuest() {
  localStorage.setItem("lunara_logged_in", "guest");
  redirectAfterLogin();
}

function redirectAfterLogin() {
  const checkoutRedirect = localStorage.getItem("redirect_after_login");

  if (checkoutRedirect === "true") {
    localStorage.removeItem("redirect_after_login");
    window.location.href = "checkout.html"; // after login/signup/guest
  } else {
    window.location.href = "index.html"; // or home page
  }
}
