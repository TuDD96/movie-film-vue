import { createStore } from "vuex";
import Home from "./modules/Home";

// Create a new store instance.
const store = {
  state: {
    loading: false,
  },
  mutations: {
    setLoading: (state: { loading: boolean }, value: boolean) => {
      state.loading = value;
    },
  },
  modules: {
    Home,
  },
};

export default createStore(store);
