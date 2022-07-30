let time = new Date()

let theme = document.getElementById('theme');
let img = document.getElementById('img')

if (time.getHours() >=21 && time.getHours() <= 6 ) {
    theme.href = "css/dark-them.css"
} else {
    theme.href = "css/style.css"
}