let form = document.querySelector("form");
let demo = document.querySelector("#demo");
let input = document.querySelector("#input");
let button = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = Number(input.value.trim());
  switch (inputValue) {
    case 1:
      demo.textContent = "Dushanba";
      break;

    case 2:
      demo.textContent = "Seshanba";
      break;

    case 3:
      demo.textContent = "Chorshanba";
      break;

    case 4:
      demo.textContent = "Payshanba";
      break;

    case 5:
      demo.textContent = "Juma";
      break;

    case 6:
      demo.textContent = "Shanba";
      break;

    case 7:
      demo.textContent = "Yakshanba";
      break;

    default:
      demo.textContent = "Noto'g'ri qiymat kiritdingiz!";
      break;
  }
});
