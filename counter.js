console.log("WASAAAAAA")
// The Slideshow class.
class Slideshow {
  constructor(el) {
    this.DOM = { el: el };

    this.config = {
      slideshow: {
        delay: 8500, // 5.5 segundos de duración total por diapositiva
        pagination: {
          duration: 5.5, // Duración de la barra de progreso sincronizada con la diapositiva
        },
      },
    };

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
        delay: this.config.slideshow.delay, // 5.5 segundos de duración por slide
        disableOnInteraction: false,
      },
      speed: 500, // Velocidad de la transición entre diapositivas
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
            number = index <= 8 ? "0" + (slideIndex + 1) : slideIndex + 1;

          var paginationItem = '<span class="slideshow-pagination-item">';
          paginationItem +=
            '<span class="pagination-number">' + number + "</span>";
          paginationItem =
            index <= 8
              ? paginationItem +
                '<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>'
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
          self.animateSlide(); // Animación inicial al cargar
          self.animatePagination(); // Animar la barra de la primera diapositiva inmediatamente
        },
        slideChangeTransitionStart: function () {
          self.animateSlideOut(); // Animación de salida antes de cambiar de diapositiva
          self.resetPagination(); // Reinicia la barra de progreso
        },
        slideChangeTransitionEnd: function () {
          self.animateSlide(); // Animación de entrada en la nueva diapositiva
          self.animatePagination(); // Animar la barra de progreso
        },
      },
    });

    // Init events for buttons.
    this.initNavigationButtons();
  }

  initNavigationButtons() {
    const self = this;
    
    // Override default behavior for the next and prev buttons
    document.querySelector('.slideshow-navigation-button.next').addEventListener('click', function (e) {
      e.preventDefault();
      self.animateSlideOut(); // Disparar animación de salida
      setTimeout(function () {
        self.slideshow.slideNext(); // Cambiar de diapositiva después de la animación de salida
      }, 500); // Tiempo igual al de la animación de salida (0.5 segundos)
    });

    document.querySelector('.slideshow-navigation-button.prev').addEventListener('click', function (e) {
      e.preventDefault();
      self.animateSlideOut(); // Disparar animación de salida
      setTimeout(function () {
        self.slideshow.slidePrev(); // Cambiar de diapositiva después de la animación de salida
      }, 500); // Tiempo igual al de la animación de salida (0.5 segundos)
    });
  }

  // Función para esperar que la imagen de fondo cargue antes de iniciar la animación
  waitForImageLoad(element, callback) {
    const img = new Image();
    const backgroundImage = window.getComputedStyle(element).backgroundImage;

    if (backgroundImage !== 'none') {
      const imageUrl = backgroundImage.slice(5, -2); // Obtener la URL de la imagen
      img.src = imageUrl;

      // Ejecutar el callback cuando la imagen se cargue
      img.onload = function() {
        callback();
      };
    } else {
      // Si no hay imagen de fondo, ejecutar el callback inmediatamente
      callback();
    }
  }

  // Animación de entrada del contenido (slide-content)
  animateSlide() {
    // Obtener la diapositiva activa y su contenido
    this.DOM.activeSlide = this.DOM.el.querySelector(".swiper-slide-active");
    this.DOM.activeSlideContent = this.DOM.activeSlide.querySelector(".slide-content");
    this.DOM.activeSlideAdditionalContent = this.DOM.activeSlide.querySelector(".additional-content");
    const slideImage = this.DOM.activeSlide.querySelector(".slide-image");

    // Reiniciar el estado de opacidad y posición de cada diapositiva antes de la animación
    const allContents = this.DOM.el.querySelectorAll(".slide-content");
    allContents.forEach((content) => {
      gsap.set(content, { opacity: 0, x: "-100%" }); // Reinicia todas las diapositivas
    });

    const allAdditionalContents = this.DOM.el.querySelectorAll(".additional-content");
    allAdditionalContents.forEach((content) => {
      gsap.set(content, { opacity: 0 }); // Inicializa el contenido adicional invisible
    });

    const allBoldHighlights = this.DOM.activeSlide.querySelectorAll(".bold-highlight");
    allBoldHighlights.forEach((highlight) => {
      gsap.set(highlight, { opacity: 1 }); // Asegura que el texto esté visible
      highlight.classList.remove("animate"); // Elimina la clase de animación del recuadro
    });

    // Esperar a que la imagen de fondo esté completamente cargada antes de animar
    this.waitForImageLoad(slideImage, () => {
      // Animar el contenido principal (entrada)
      gsap.fromTo(this.DOM.activeSlideContent, 
        { opacity: 0, x: "-100%" }, // Reinicia el estado de entrada
        { opacity: 1, x: "0%", duration: 0.5, ease: "power2.out" }
      );

      // Desaparecer el contenido a los 3.5 segundos
      gsap.to(this.DOM.activeSlideContent, {
        delay: 7.5, // Desaparecer después de 3.5 segundos
        duration: 0.5, // Duración de la animación de salida
        ease: "power2.in",
        opacity: 0,   // Desvanecer el contenido
        x: "100%",    // Mover el contenido fuera de la pantalla
        onStart: function () {
          console.log('Contenido desapareciendo después de 3.5 segundos');
        }
      });

      if (this.DOM.activeSlideAdditionalContent) {
        // Animar el contenido adicional (fade-in)
        gsap.to(this.DOM.activeSlideAdditionalContent, {
          duration: 0.5, // Duración de la animación de entrada
          ease: "power2.out",
          opacity: 1,   // Hacer visible el contenido adicional
        });

        // Desaparecer el contenido adicional a los 3.5 segundos
        gsap.to(this.DOM.activeSlideAdditionalContent, {
          delay: 3.5, // Desaparecer después de 3.5 segundos
          duration: 0.5, // Duración de la animación de salida
          ease: "power2.in",
          opacity: 0,   // Desvanecer el contenido adicional
          onStart: function () {
            console.log('Contenido adicional desapareciendo después de 3.5 segundos');
          }
        });
      }

      // Animar el recuadro detrás de todos los elementos con clase bold-highlight, secuencialmente
      allBoldHighlights.forEach((highlight) => {
        setTimeout(() => {
          highlight.classList.add("animate"); // Agrega la clase para animar el recuadro de cada bold-highlight
        }, 1000); // Tiempo de espera para que el texto se vea primero
      });
    });
  }

  // Animación de salida del contenido (antes de cambiar el slide)
  animateSlideOut() {
    if (this.DOM.activeSlideContent) {
      gsap.to(this.DOM.activeSlideContent, {
        duration: 0.5, // Duración de la animación de salida
        ease: "power2.in",
        opacity: 0,   // Desvanecer el contenido
        x: "100%",    // Mover el contenido fuera de la pantalla
        onStart: function () {
          console.log('Contenido desapareciendo antes de cambiar la diapositiva');
        }
      });
    }
  }

  // Animar la barra de progreso
  animatePagination() {
    const allLoaders = document.querySelectorAll('.pagination-separator-loader');
    const activeBullet = document.querySelector('.slideshow-pagination-item.active .pagination-separator-loader');
  
    // Reinicia todas las barras de progreso
    allLoaders.forEach(loader => {
      gsap.set(loader, { scaleX: 0 });
    });
  
    // Solo anima la barra de la diapositiva activa
    if (activeBullet) {
      gsap.to(activeBullet, {
        duration: this.config.slideshow.pagination.duration, // 5.5 segundos
        scaleX: 1, // Llenar la barra
        ease: 'linear', // Llenado lineal
      });
    }
  }

  // Resetear la barra de progreso de la paginación
  resetPagination() {
    const allLoaders = document.querySelectorAll('.pagination-separator-loader');
    allLoaders.forEach(loader => {
      gsap.set(loader, { scaleX: 0 }); // Reinicia todas las barras
    });
  }
}

const slideshow = new Slideshow(document.querySelector(".slideshow"));
