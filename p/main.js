window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#005f87';
    } else {
        header.style.backgroundColor = '#007bb5';
    }
});
const img = document.querySelector('aside img');
if (img) {
    img.addEventListener('click', function() {
        img.style.transform = 'scale(2)';
        img.style.transition = 'transform 0.3s';
    });
}

const articles = document.querySelectorAll('article');
let index = 0;

setInterval(() => {
    articles.forEach(article => article.style.display = 'none');
    articles[index].style.display = 'block';
    index = (index + 1) % articles.length;
}, 3000);
