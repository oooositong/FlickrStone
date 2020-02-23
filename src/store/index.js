import Vue from 'vue';
import Vuex from 'vuex';
import gallery from './gallery';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    gallery,
  }
});

export default store;
