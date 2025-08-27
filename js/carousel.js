let carouselItemsArr = [];

class CarouselItem {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }
}

class CarouselController {
    static start(arr) {
        if (arr) {
            if (arr.length > 0) {
                CarouselController._sequence = 0;
                CarouselController._size = arr.length;
                CarouselController.next();
                CarouselController._interval = setInterval(function(){ CarouselController.next(); },2000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static next() {
        const carouselElement = document.getElementById("carousel");
        const titleElement = document.getElementById("carousel-title");

        if (carouselElement && titleElement) {
            const currentItem = carouselItemsArr[CarouselController._sequence];

            carouselElement.innerHTML = `
                <a href="${currentItem.url}">
                    <img src="img/${currentItem.image}" alt="${currentItem.title}" style="width: 100%;">
                </a>
            `;

            titleElement.innerHTML = `
                <a href="${currentItem.url}">
                    <p>${currentItem.title}</p>
                </a>
            `;

            CarouselController._sequence = (CarouselController._sequence + 1) % CarouselController._size;
        }
    }
}
