const email = document.querySelector("#email");
const error = document.querySelector(".error");
const form = document.querySelector(".form");
const completed = document.querySelector(".access__completed");
const signUp = document.querySelector(".access");

// completed.classList.remove("hide");

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    console.log("works");
    error.classList.remove("active");
    email.style.boxShadow = "";
    completed.classList.add("hide");
    signUp.style.display = "none";
    input.value = "";
  } else if (!input.value || !re.test(input.value.trim())) {
    console.log("not working");
    error.classList.add("active");
    email.style.boxShadow = "inset 0px 0px 5px rgba(245, 39, 39, 1)";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail(email);
});
