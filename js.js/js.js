const radioButtons = document.querySelectorAll('input[name="color"]');

radioButtons.forEach(radio => {
  radio.addEventListener('change', event => {
    document.body.style.backgroundColor = event.target.value;
  });
});

// Task2
const inputHref = document.getElementById("name-input");
const pId = document.getElementById("name-output");

inputHref.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
     console.log(event.currentTarget.value);
  pId.textContent = `Незнайомець`
  }
  else{
    console.log(event.currentTarget.value);
  pId.textContent = `${event.currentTarget.value}`
  }
})

const idInput = document.getElementById("validation-input");
idInput.addEventListener('input', () => {
  const inputLength = idInput.value.length;
  const requiredLength = Number(idInput.dataset.length);

  if (inputLength >= requiredLength) {
    idInput.style.color = "green";
  } else {
    idInput.style.color = "red";
  }
});

// Task 3

const inputRange = document.getElementById('font-size-control');
const text = document.getElementById('text');

inputRange.addEventListener('input', () => {
  const size = inputRange.value;
  text.style.fontSize = `${size}px`;
});