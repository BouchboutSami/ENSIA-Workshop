const email = document.querySelector("#user-email");
const password = document.querySelector("#user-password");
const btnLogin = document.querySelector("#submit-btn");

btnLogin.addEventListener("click", (e) => {
  // Validate the email password and insert in the database
  localStorage.setItem(
    "user",
    JSON.stringify({ email: email.value, password: password.value })
  );
  window.location.href = "/Quizz";
});
