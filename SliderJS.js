let images = [{
    url: 
  "https://img.favcars.com/porsche/911-gt3/porsche_911-gt3_2009_pictures_5_l.jpg",
    title: "Porsche 911 GT3"
  }, {
    url: 
  "https://img.favcars.com/porsche/911-carrera/photos_porsche_911-carrera_2001_22_l.jpg",
    title: "Porsche 911 Carrera"
  }, {
    url: 
  "https://img.favcars.com/porsche/911-carrera/pictures_porsche_911-carrera_17_l.jpg",
    title: "Porsche 911 Cabrio"
  }, {
    url: "https://img.favcars.com/porsche/cayenne/porsche_cayenne_2003_photos_2_l.jpg",
    title: "Gemballa GT600 Biturbo"
  }, {
    url: "https://img.favcars.com/porsche/cayenne/porsche_cayenne_2010_wallpapers_7_l.jpg",
    title: "Met-R Cayenne Radical Star"
}];

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    titles: false,
    dots: true,
    autoplay: false
  };
  
  let sliderImages = document.querySelector('.slider__images')
  let sliderArrows = document.querySelector('.slider__arrows')
  let sliderDots = document.querySelector(".slider__dots");
  
  initImages();
  initArrows();
  
  if (options.dots) {
    initDots();
  }
  
  if (options.titles) {
    initTitles();
  }
  
  if (options.autoplay) {
    initAutoplay();
  }
  
  if (options.autoplay) {
    initAutoplay();
  }
  
  
  function initImages(){
    images.forEach((image,index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;    }
    )
  }
  
  
 function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
 		if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.titles) changeTitle(num); 
  }

function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        sliderDots.querySelector(".active").classList.remove("active");
				this.classList.add("active");
      })
    })
  }
  
  
  function initTitles() {
    let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
    sliderImages.innerHTML += cropTitle(titleDiv, 50);
  }
  
  function cropTitle(title, size) {
    if (title.length <= size) {
      return title;
    } else {
      return title.substr(0, size) + "...";
    }
  }
  
  function changeTitle(num) {
    if (!images[num].title) return;
    let sliderTitle = sliderImages.querySelector(".slider__images-title");
    sliderTitle.innerText = cropTitle(images[num].title, 50);
  }
  
function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }


}


let sliderOptions = {
  dots: true,
  titles: true,
  autoplay: true,
  autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});