import './src/carusel/carusel.css';

document.querySelector('#carusel').innerHTML = `
<section>
<div class="swiper-container slideshow">
  <div class="swiper-wrapper">
    <!-- Diapositiva 1 -->
    <div class="swiper-slide slide">
      <div
        class="slide-image"
        style="
          background-image: url(https://theyan.b-cdn.net/corona-landing/Portada-1.jpg);
        "
      >
        <!-- Overlay para oscurecer la imagen -->
        <div class="image-overlay"></div>
      </div>

      <!-- Contenedor del contenido -->
      <div class="slide-content">
        <span class="slide-title">
        Casas <br> que <span class="bold-highlight">gritan</span> <span class="bold-highlight">tendencia</span>
        </span>
        <!-- <span class="slide-title">Exotic places</span> -->
        <p class="slide-description">
        Inspírate con nuestras cuatro casas y conoce las tendencias de diseño 2025
        </p>
      </div>
    </div>

    <!-- Diapositiva 2 -->
    <div class="swiper-slide slide">
      <div
        class="slide-image"
        style="
          background-image: url(https://theyan.b-cdn.net/corona-landing/Casa%20playera.jpg);
        "
      >
        <div class="image-overlay"></div>
      </div>

      <div class="slide-content">
        <span class="slide-title">
          Casa <br> <span class="bold-highlight">playera</span>
        </span>
        <!-- <span class="slide-title">Meet ocean</span> -->
        <p class="slide-description">
        ¿Amas la playa? Tu casa puede sentirse como una.
        </p>
        <button class="slide-button">VER LA CASA</button>
      </div>
      <div class="additional-content">
        <p class="subtitle">Tendencia 01</p>
        <p class="bold-text"><strong>Brisa costera</strong></p>
      </div>
    </div>

    <!-- Diapositiva 3 -->
    <div class="swiper-slide slide">
      <div
        class="slide-image"
        style="
          background-image: url(https://theyan.b-cdn.net/corona-landing/casa%20campestre.jpg);
        "
      >
        <div class="image-overlay"></div>
      </div>

      <div class="slide-content">
        <span class="slide-title">
          Casa <span class="bold-highlight">Campestre</span>
        </span>
        <!-- <span class="slide-title">Around the world</span> -->
        <p class="slide-description">
        ¿Te gusta la sensación acogedora de una cabaña? Tu casa puede sentirse así.
        </p>
        <button class="slide-button">VER LA CASA</button>
      </div>
      <div class="additional-content">
        <p class="subtitle">Tendencia 02</p>
        <p class="bold-text"><strong>Encanto campestre</strong></p>
      </div>
    </div>
    <!-- Diapositiva 3 -->
    <div class="swiper-slide slide">
      <div
        class="slide-image"
        style="
          background-image: url(https://theyan.b-cdn.net/corona-landing/Casa%20Multicultural-1.jpg);
        "
      >
        <div class="image-overlay"></div>
      </div>

      <div class="slide-content">
        <span class="slide-title">
          Casa <span class="bold-highlight">Multicultural</span>
        </span>
        <!-- <span class="slide-title">Around the world</span> -->
        <p class="slide-description">
        ¿Eres amante de las culturas del mundo y los viajes? Tu casa puede sentirse como uno.
        </p>
        <button class="slide-button">VER LA CASA</button>
      </div>
      <div class="additional-content">
        <p class="subtitle">Tendencia 03</p>
        <p class="bold-text"><strong>Manifiesto ancestral</strong></p>
      </div>
    </div>
    <!-- Diapositiva 4 -->
    <div class="swiper-slide slide">
      <div
        class="slide-image"
        style="
          background-image: url(https://theyan.b-cdn.net/corona-landing/Casa%20colorida-1.jpg);
        "
      >
        <div class="image-overlay"></div>
      </div>

      <div class="slide-content">
        <span class="slide-title">
          Casa <span class="bold-highlight">Colorida</span>
        </span>
        <!-- <span class="slide-title">Around the world</span> -->
        <p class="slide-description">
        ¿Eres extrovertido y te gustan los espacios coloridos? Tu casa puede expresar eso.
        </p>
        <button class="slide-button">VER LA CASA</button>
      </div>
      <div class="additional-content">
        <p class="subtitle">Tendencia 04</p>
        <p class="bold-text"><strong>Surrealismo digita</strong></p>
      </div>
    </div>
  </div>

  <!-- Paginación -->
  <div class="slideshow-pagination"></div>

  <!-- Botones de navegación -->
  <div class="slideshow-navigation">
    <div class="slideshow-navigation-button prev">
      <span class="fas fa-chevron-left"></span>
    </div>
    <div class="slideshow-navigation-button next">
      <span class="fas fa-chevron-right"></span>
    </div>
  </div>
</div>
</section>
`;
