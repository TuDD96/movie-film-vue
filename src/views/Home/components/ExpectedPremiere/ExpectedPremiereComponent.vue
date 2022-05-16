<template>
  <section class="section section--bg" data-bg="img/section/section.jpg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section__title">Expected premiere</h2>
        </div>

        <MovieItemComponent />
        <MovieItemComponent />
        <MovieItemComponent />

        <div class="col-12">
          <a href="#" class="section__btn">Show more</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MovieItemComponent from "@/components/MovieItem/MovieItemComponent.vue";

export default {
  name: "ExpectedPremiereComponent",
  components: {
    MovieItemComponent,
  },
};
</script>
