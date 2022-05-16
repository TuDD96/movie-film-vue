<template>
  <div
    :class="`tab-pane fade show ${this.active ? 'active' : ''}`"
    :id="`tab-${category.slug}`"
    role="tabpanel"
    :aria-labelledby="`${category.slug}-tab`"
  >
    <div class="row">
      <MovieItemComponent
        v-for="(movie, index) in listMovie"
        :key="index"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import MovieItemComponent from "@/components/MovieItem/MovieItemComponent.vue";

export default {
  name: "TabContentComponent",
  components: {
    MovieItemComponent,
  },
  props: ["active", "category", "listMovie"],
  data() {
    return {};
  },
  created() {
    //
  },
};
</script>
