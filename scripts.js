//variaveis

const btn = document.getElementById('btn')
const bxSearch = document.querySelector('.bx-search')
const sidebar = document.querySelector('.sidebar')
const home = document.querySelector('.homeContent')

//eventos de escuta

btn.addEventListener('click', () => {
    sidebar.classList.toggle('active')
    home.classList.toggle('active')
})

bxSearch.addEventListener('click', () => {
    sidebar.classList.toggle('active')
    home.classList.toggle('active')
})