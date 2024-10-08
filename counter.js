console.log("WASAAAAAA");
// The Slideshow class.
class Slideshow {
  constructor(el) {
    this.DOM = { el: el };

    this.config = {
      slideshow: {
        delay: 8500, // Duración total por diapositiva
        pagination: {
          duration: 8.5, // Duración de la barra de progreso sincronizada con el tiempo de la diapositiva
        },
      },
      throttleTime: 1000, // Tiempo mínimo entre clicks para evitar saltos
    };

    this.isNavigating = false; // Evitar múltiples transiciones simultáneas
    this.lastClick = 0; // Controlar tiempo entre clics

    // Inicializamos el slideshow
    this.init();
  }

  init() {
    var self = this;

    // Set the slider
    this.slideshow = new Swiper(this.DOM.el, {
      direction: "horizontal",
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: this.config.slideshow.delay,
        disableOnInteraction: false,
      },
      speed: 500,
      preloadImages: true,
      updateOnImagesReady: true,

      pagination: {
        el: ".slideshow-pagination",
        clickable: true,
        bulletClass: "slideshow-pagination-item",
        bulletActiveClass: "active",
        clickableClass: "slideshow-pagination-clickable",
        modifierClass: "slideshow-pagination-",
        renderBullet: function (index, className) {
          var slideIndex = index,
            number = index <= 8 ? "0" + slideIndex : slideIndex;

          var paginationItem = '<span class="slideshow-pagination-item">';
          paginationItem += '<span class="pagination-number">' + number + "</span>";
          paginationItem = index <= 8
            ? paginationItem + '<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>'
            : paginationItem;
          paginationItem += "</span>";

          return paginationItem;
        },
      },

      navigation: {
        nextEl: ".slideshow-navigation-button.next",
        prevEl: ".slideshow-navigation-button.prev",
      },

      scrollbar: {
        el: ".swiper-scrollbar",
      },

      on: {
        init: function () {
          self.animateSlide();
          self.animatePagination();
        },
        slideChangeTransitionStart: function () {
          self.resetPagination();
          self.stopPaginationAnimation();
        },
        slideChangeTransitionEnd: function () {
          self.isNavigating = false; // Permitir nueva navegación
          self.animateSlide();
          self.animatePagination();
        },
      },
    });

    // Init events for buttons and paginations.
    this.initNavigationButtons();
    this.initPaginationClicks();
  }

  initNavigationButtons() {
    const self = this;

    document.querySelector('.slideshow-navigation-button.next').addEventListener('click', function (e) {
      e.preventDefault();
      if (!self.isNavigating) {
        self.navigateSlide('next');
      }
    });

    document.querySelector('.slideshow-navigation-button.prev').addEventListener('click', function (e) {
      e.preventDefault();
      if (!self.isNavigating) {
        self.navigateSlide('prev');
      }
    });
  }

  navigateSlide(direction) {
    const now = new Date().getTime();
    if (now - this.lastClick < this.config.throttleTime) return; // Controlar el tiempo mínimo entre clics

    this.isNavigating = true;
    this.lastClick = now;

    this.slideshow.autoplay.stop(); // Detener autoplay temporalmente
    this.resetPagination();

    if (direction === 'next') {
      this.slideshow.slideNext();
    } else {
      this.slideshow.slidePrev();
    }

    this.slideshow.autoplay.start(); // Reiniciar autoplay
  }

  initPaginationClicks() {
    const self = this;
    document.querySelectorAll('.slideshow-pagination-item').forEach(item => {
      item.addEventListener('click', function (e) {
        self.resetPagination();
      });
    });
  }

  waitForImageLoad(element, callback) {
    const img = new Image();
    const backgroundImage = window.getComputedStyle(element).backgroundImage;

    if (backgroundImage !== 'none') {
      const imageUrl = backgroundImage.slice(5, -2);
      img.src = imageUrl;

      img.onload = function () {
        callback();
      };
    } else {
      callback();
    }
  }

  animateSlide() {
    this.DOM.activeSlide = this.DOM.el.querySelector(".swiper-slide-active");
    this.DOM.activeSlideContent = this.DOM.activeSlide.querySelector(".slide-content");
    this.DOM.activeSlideAdditionalContent = this.DOM.activeSlide.querySelector(".additional-content");
    const slideImage = this.DOM.activeSlide.querySelector(".slide-image");

    // Reiniciar animaciones
    const allContents = this.DOM.el.querySelectorAll(".slide-content");
    allContents.forEach((content) => {
      gsap.set(content, { opacity: 0, x: "-100%" });
    });

    const allAdditionalContents = this.DOM.el.querySelectorAll(".additional-content");
    allAdditionalContents.forEach((content) => {
      gsap.set(content, { opacity: 0, x: "-100%" });
    });

    const allBoldHighlights = this.DOM.activeSlide.querySelectorAll(".bold-highlight");
    allBoldHighlights.forEach((highlight) => {
      gsap.set(highlight, { opacity: 1 });
      highlight.classList.remove("animate");
    });

    this.waitForImageLoad(slideImage, () => {
      // Animar tanto slide-content como additional-content
      gsap.fromTo([this.DOM.activeSlideContent, this.DOM.activeSlideAdditionalContent],
        { opacity: 0, x: "-100%" },
        { opacity: 1, x: "0%", duration: 0.5, ease: "power2.out" }
      );
    });

    // Reanimar los bold highlights
    allBoldHighlights.forEach((highlight) => {
      setTimeout(() => {
        highlight.classList.add("animate");
      }, 2000);
    });
  }

  animatePagination() {
    const allLoaders = document.querySelectorAll('.pagination-separator-loader');
    const activeBullet = document.querySelector('.slideshow-pagination-item.active .pagination-separator-loader');

    allLoaders.forEach(loader => {
      gsap.set(loader, { scaleX: 0 });
    });

    if (activeBullet) {
      gsap.to(activeBullet, {
        duration: this.config.slideshow.pagination.duration,
        scaleX: 1,
        ease: 'linear',
      });
    }
  }

  stopPaginationAnimation() {
    const allLoaders = document.querySelectorAll('.pagination-separator-loader');
    allLoaders.forEach(loader => {
      gsap.killTweensOf(loader); // Detiene la animación activa en las barras de progreso
    });
  }

  resetPagination() {
    const allLoaders = document.querySelectorAll('.pagination-separator-loader');
    allLoaders.forEach(loader => {
      gsap.set(loader, { scaleX: 0 });
    });
  }
}

const slideshow = new Slideshow(document.querySelector(".slideshow"));
