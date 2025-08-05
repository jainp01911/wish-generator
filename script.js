const actionBtn = document.getElementById('action-btn')
const containerEl = document.querySelector('.container')

const wishesArr = ['May you succeed', 'May you be rich', 'May you achieve prosperity', 'May you live long life', 'May you have supportive friends']

const wishEl = document.createElement('p')

actionBtn.addEventListener('click', () => {
  wishEl.textContent = wishesArr[Math.floor(Math.random()*wishesArr.length)]
  containerEl.appendChild(wishEl)
})
