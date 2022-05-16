<template>
  <section class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>

          <button
            @click="prev()"
            ref="btn"
            class="home__nav home__nav--prev"
            type="button"
          >
            <i class="icon ion-ios-arrow-round-back"></i>
          </button>
          <button
            @click="next()"
            class="home__nav home__nav--next"
            type="button"
          >
            <i class="icon ion-ios-arrow-round-forward"></i>
          </button>
        </div>

        <div class="col-12">
          <div class="row">
            <!-- :autoplay="5000" -->
            <Carousel ref="carousel" style="width: 100%" :wrap-around="true">
              <Slide v-for="slide in 12" :key="slide">
                <SliderItemComponent />
                <SliderItemComponent />
                <SliderItemComponent />
                <SliderItemComponent />
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import SliderItemComponent from "@/components/SliderItem/SliderItemComponent.vue";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    SliderItemComponent,
  },
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style lang="scss">
.carousel__prev,
.carousel__next {
  display: none;
}

.card__content {
  text-align: left;
}
</style>
