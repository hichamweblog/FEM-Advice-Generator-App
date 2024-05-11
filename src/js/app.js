const btnEl = document.querySelector('.btn');
const adviceIdEl = document.querySelector('.advice-id');
const adviceEl = document.querySelector('.advice')

window.addEventListener('load', getAdvice);
btnEl.addEventListener('click', getAdvice);

async function getAdvice() {
  try {
    adviceEl.innerHTML = `<div class="loading-spinner"></div>`;
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) {
      adviceEl.innerHTML = `<p class='advice'> Sorry, something went wrong. Please try again later.</p>`
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    adviceIdEl.textContent = `${data.slip.id}`;
    adviceEl.textContent = `“${data.slip.advice}”`;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
