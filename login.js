document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.querySelector(".form-container");
  const formCloseBtn = document.querySelector(".form-close");
  const signupBtn = document.querySelector("#signup");
  const loginBtn = document.querySelector("#login");
  const pwShowHide = document.querySelectorAll(".pw-hide");

  // Close login form when clicking the cross icon
  if (formCloseBtn) {
      formCloseBtn.addEventListener("click", () => {
          formContainer.style.display = "none";
      });
  }



// Toggle password visibility
pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.closest(".input-box").querySelector("input"); // Correctly find the input

        if (getPwInput) {
            if (getPwInput.type === "password") {
                getPwInput.type = "text";
                icon.classList.replace("uil-eye-slash", "uil-eye");
            } else {
                getPwInput.type = "password";
                icon.classList.replace("uil-eye", "uil-eye-slash");
            }
        }
    });
});

 

  // Switch to Signup form
  if (signupBtn) {
      signupBtn.addEventListener("click", (e) => {
          e.preventDefault();
          formContainer.classList.add("active");
      });
  }

  // Switch back to Login form
  if (loginBtn) {
      loginBtn.addEventListener("click", (e) => {
          e.preventDefault();
          formContainer.classList.remove("active");
      });
  }
});


function openPopup() {
  document.getElementById("popupModal").style.display = "block";
  document.getElementById("popupFrame").src = "page.html"; // Change to your page
}

function closePopup() {
  document.getElementById("popupModal").style.display = "none";
  document.getElementById("popupFrame").src = ""; // Clear iframe on close
}