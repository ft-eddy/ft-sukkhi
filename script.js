let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    if (currentSlide < slides.length - 2) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function yesResponse() {
    document.getElementById("finalMessage").innerHTML = 
        "I'M SOOOOO HAPPY! 🥰💖 You are my first and last girlfriend! 😭💍 I promise to always be there for you—through all your happiness and sadness. 🤗💕 Always with you, my cutest Sukhreet! ✨💫";
    showSlide(slides.length - 1);
}

function noResponse() {
    document.getElementById("finalMessage").innerHTML = 
        "No worries! 😌💙 Forget the slides and react as if nothing happened. 😁✌️ Our friendship remains as strong as ever! 👫";
    showSlide(slides.length - 1);
}

showSlide(currentSlide);
