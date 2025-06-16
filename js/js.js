// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно
document.querySelectorAll('input[name="color"]').forEach((input) => {
    input.addEventListener("click", () => {
    document.querySelector('body').style.background = input.value;
    })
})

// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const value = input.value.trim();
  if (value === "") {
    output.textContent = "незнайомець";
  } else {
    output.textContent = value;
  }
});
  

// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const inputEl = document.querySelector("#font-size-control");
inputEl.addEventListener("input", () => {
  document.querySelector("#text").style.fontSize = inputEl.value + "1px";
});