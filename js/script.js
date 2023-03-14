// array whit images
const imagesArray = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg']
// container html
const imagesContainer = document.querySelector('.slider-items')
// cicle for (display array on html)
for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i]
    const sliderItems = `<div class="item"><img src="${currentImage}" alt="image"></div>`;
    imagesContainer.innerHTML += sliderItems;
}

