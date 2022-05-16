<template>
  <ContentComponent :listMovie="movies" />
</template>

<script>
import ContentComponent from "@/views/Home/components/Content/ContentComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    ContentComponent,
  },
  created() {
    this.getHomeVideo({});
  },
  computed: {
    ...mapGetters({
      movies: "Home/GET_MOVIE",
    }),
  },
  methods: {
    ...mapActions({
      getHomeVideo: "Home/getHomeVideo",
    }),
  },
};
</script>

<style lang="scss">
.home {
  .item {
    width: 25%;
    padding-right: 15px;
    padding-left: 15px;
  }
}
.carousel__prev,
.carousel__next {
  display: none;
}
</style>
