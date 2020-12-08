<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href="banner1">
            <img
              class="d-block img-fluid w-100"
              src="carousel/banner1.jpg"
              alt="First slide"
            />
          </a>
        </div>
        <div class="carousel-item">
          <a href="banner2">
            <img
              class="d-block img-fluid w-100"
              src="carousel/banner2.jpg"
              alt="Second slide"
            />
          </a>
        </div>
        <div class="carousel-item">
          <a href="banner3">
            <img
              class="d-block img-fluid w-100"
              src="carousel/banner3.jpg"
              alt="Second slide"
            />
          </a>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
      </a>
    </div>
  </div>
</template>