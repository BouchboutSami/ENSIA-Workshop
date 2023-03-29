const inputemail = document.querySelector("#user-email");
const inputpwd = document.querySelector("#user-password");
const btnSubmit = document.querySelector(".submit-btn");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let pass = true;
  inputemail.value.includes("@") && inputemail.value.length > 7
    ? null
    : (pass = false);
  inputpwd.value.length > 6 ? null : (pass = false);
  if (pass) {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: inputemail.value, password: inputpwd.value })
    );
    window.location.href = "/Quizz";
  }
});
