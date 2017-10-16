const images = document.querySelectorAll('img');

const imagesArray = Array.from(images);

// en savoir plus sur map https://www.udemy.com/javascriptleguide/learn/v4/t/lecture/6918912?start=0

imagesArray.map((image, index) => image.addEventListener('load', function() {
    console.log(`Image n${index + 1} chargee`);
}));