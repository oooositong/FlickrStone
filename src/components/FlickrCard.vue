<template>
  <div class="container">
    <img class="preview" :src="media.url_s">

    <div class="info">
      <p class="title">{{ media.title || 'Whoops, the title is missing.' }}</p>

      <div class="metadata">
        <span class="owner">{{ media.ownername }}</span>
        <span class="owner">{{ uploadDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'FlickrCard',
  props: {
    media: { type: Object, required: true }
  },
  computed: {
    uploadDate() {
      return moment.unix(this.media.dateupload).format('D MMM, YYYY');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.container {
  height: $x240;
  width: $x320;
  margin: $x16;
  border-radius: $x16;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  .preview {
    border-width: 0;
    width: 100%;
    height: 70%;
    object-fit: cover;
  }

  .info {
    margin: $x8 $x16;
    justify-content: space-between;
    overflow: hidden;
  }

  .title {
    margin: 0;
    color: $dark-grey;
    font-size: $x16;
    font-family: $quicksand;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .metadata {
    margin: $x8 0 0 0;
    display: flex;
    justify-content: space-between;

    .owner {
      font-size: $x12;
      font-family: $nobile;
      color: $light-grey;
    }
  }
}

.container:hover {
  transition: all 0.2s ease;
  transform: translateY(-2px);
}
</style>
