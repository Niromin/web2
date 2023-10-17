const form = document.querySelector('form');
const wish = document.querySelector("#souhait");
const message = document.querySelector("#message");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.style.display = 'none';
  message.innerText = `Your current wish is :
    ${wish.value}`;
});
