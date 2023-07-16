const emailInput = document.querySelector("#email");
const emailCopyButton = document.querySelector("#email-copy-button");

emailCopyButton.addEventListener("click", () => {
  emailInput.select();
  document.execCommand("copy");
});
