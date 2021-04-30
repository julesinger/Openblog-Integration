const current_theme = localStorage.getItem("theme")
const checkbox = document.querySelector('input[name=mode]');

if (current_theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark') 
    checkbox.checked = true
} else {
    document.documentElement.setAttribute('data-theme', 'light')
    checkbox.checked = false
}

checkbox.addEventListener('change', function() {
    if(this.checked) {
        transition()
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem("theme", 'dark')
    } else {
        transition()
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem("theme", 'light')
    }
})

let transition = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}