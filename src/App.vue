<template>
  <div id="app">
    <header>
      <h1 class="title">
        Flickr Stone
      </h1>
    </header>

    <div class="search-bar">
      <input
        type="text"
        placeholder="Search something you like..."
        v-model="keyword"
        @keyup.enter="searchByText"
        >
    </div>

    <div class="gallery">
      <FlickrCard
        v-for="(item, index) in photoList"
        :key="index"
        :media="item" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import FlickrCard from './components/FlickrCard.vue';
import './styles/main.scss';

export default {
  name: 'App',
  components: {
    FlickrCard
  },
  data() {
    return {
      keyword: ''
    };
  },
  computed: {
    ...mapState('gallery', ['photoList'])
  },
  methods: {
    ...mapActions('gallery', ['searchPhotos']),
    searchByText() {
      this.searchPhotos({ text: this.keyword });
    }
  }
}
</script>

<style lang="scss">
@import './styles/variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;

  header {
    display: flex;
    color: $white;
    // height: $x64;
    font-size: $x32;
    align-items: center;
    justify-content: center;
    background-color: $cyan;

    .title {
      margin: 0;
      padding: $x16 0;
      font-family: $alex-brush;
    }
  }

  .search-bar {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      height: $x48;
      width: $x512;
      margin: $x32;
      border-radius: $x32;
      font-size: $x16;
      font-family: $nobile;
      border: 1px solid $cyan;
      padding-left: $x24;
      cursor: pointer;
    }

    input:focus {
      border-color: $red;
    }
  }

  .gallery {
    margin: $x16;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
