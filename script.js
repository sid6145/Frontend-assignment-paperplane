const burger = document.querySelector("#burger")
const nav = document.querySelector(".nav-items")
const search = document.querySelector(".search-input")

burger.addEventListener('click', () => {
    nav.classList.toggle("nav-activate")
})

search.addEventListener('focusin', () => {
    search.classList.add('expand')
})

search.addEventListener('focusout', () => {
    search.classList.remove('expand')
})