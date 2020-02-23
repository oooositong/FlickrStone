<template>
  <div id="app">
    <header>
      <h1 class="title">
        Flickr Stone
      </h1>
    </header>

    <div class="search-bar">
      <input type="text" placeholder="Search something you like..." :value="keyword">
    </div>


  </div>
</template>

<script>
import './styles/main.scss';
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      keyword: ''
    };
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
      font-family: $noble;
      border: 1px solid $cyan;
      padding-left: $x24;
      cursor: pointer;
    }

    input:focus {
      border-color: $red;
    }
  }
}
</style>
