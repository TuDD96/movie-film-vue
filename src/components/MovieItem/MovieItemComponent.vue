<template>
  <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
    <div class="card">
      <div class="card__cover">
        <img style="height: 230px" :src="movieItem.thumb_url" alt="" />
        <router-link :to="`/${movieItem.slug}`" class="card__play">
          <i class="icon ion-ios-play"></i>
        </router-link>
      </div>
      <div class="card__content">
        <h3 class="card__title">
          <a href="#">{{ movieItem.name }}</a>
        </h3>
        <span class="card__category">
          <a href="#">{{ movieItem.origin_name }}</a>
        </span>
        <span class="card__rate">{{ movieItem.year }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getUrlMovie } from "@/utils/helper";

export default {
  name: "MovieItemComponent",
  props: ["movie"],
  data() {
    return {
      movieItem: {},
    };
  },
  mounted() {
    this.movieItem = {
      ...this.movie,
      thumb_url: getUrlMovie(this.movie.thumb_url),
    };
  },
};
</script>
