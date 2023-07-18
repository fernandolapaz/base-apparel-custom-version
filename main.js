// FORM
const form = document.querySelector('.info__form')
const email = document.querySelector('.form__email')

// Submit
form.addEventListener('submit', function (e) {
    e.preventDefault()
    check()
})

// Check
function check() {
    const value = email.value.trim()
    const message = document.querySelector('.form__message')

    function success() {
        form.classList.add('valid')
    }

    if (/.+@.+\..+/.test(value)) {
        setTimeout(success, 400)
    } else if (value === '') {
        form.classList.add('invalid')
        message.innerHTML = 'Please provide an email'
    } else {
        form.classList.add('invalid')
        message.innerHTML = `"${value}" is not a valid email`
    }
}

// Clear
email.addEventListener('focus', function () {
    form.classList.remove('invalid')
    email.value = ''
})

// Typewriter animation
let i = 0
let placeholder = ""
const txt = "Email Address"
const speed = 125

function type() {
    if (i < txt.length) {
        placeholder += txt.charAt(i)
        email.setAttribute("placeholder", placeholder)
        i++
        setTimeout(type, speed)
    }
}

type()

// FOOTER
const arrow = document.querySelector('.attr__btn')
const panel = document.querySelector('.attribution')

arrow.addEventListener('click', function () {
    panel.classList.toggle('show')

    if (panel.classList.contains('show')) {
        this.setAttribute('aria-expanded', 'true')
        this.setAttribute('title', 'Hide attribution information')
    } else {
        this.setAttribute('aria-expanded', 'false')
        this.setAttribute('title', 'Show attribution information')
    }
})

// Click outside
document.addEventListener('click', function (e) {
    if (!arrow.contains(e.target)) {
        if (panel.classList.contains('show')) {
            panel.classList.remove('show')
            arrow.setAttribute('aria-expanded', 'false')
            arrow.setAttribute('title', 'Show attribution information')
        }
    }
})