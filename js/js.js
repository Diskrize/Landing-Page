let time = new Date()

let theme = document.getElementById('theme');

if (time.getHours() >= 21 || time.getHours() <= 6) {
    theme.href = "css/dark-them.css"
    document.getElementById("header_img_1").src = "img/bitcoin_dark.png"
    document.getElementById("header_img_2").src = "img/cryptocom_dark.png"
    document.getElementById("header_img_3").src = "img/coinbase_dark.png"
} else {
    theme.href = "css/style.css"
}