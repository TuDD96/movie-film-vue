/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MovieType } from "./types";
import apiCaller from "@/utils/api";
import { API_HOME_VIDEO } from "@/utils/urls";

const state = {
  test: 1,
  movies: [],
};

const getters = {
  GET_TEST_STATE: (state: { test: number }) => state.test,
  GET_MOVIE: (state: { movies: MovieType[] }) => state.movies,
};

const mutations = {
  setMovies(
    state: {
      movies: MovieType[];
    },
    value: MovieType[]
  ) {
    state.movies = value;
  },
};

const actions = {
  getHomeVideo: ({ commit }: { commit: any }) => {
    return new Promise((resolve, reject) => {
      apiCaller.getRequest(
        API_HOME_VIDEO,
        null,
        (res) => {
          resolve(res);
          commit("setMovies", res.data.pageProps.data.items);
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
