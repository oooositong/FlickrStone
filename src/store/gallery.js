import axois from 'axios';
import config from '../config';

const flickrApi = axois.create({
  baseURL: config.FLICKR_URL,
});

const pre_params = {
  api_key: config.FLICKR_TOKEN,
  format: 'json',
  nojsoncallback: 1
};

const state = {
  perPage: 50,
  page: 0,
  loadMore: true,
  photoList: [],
  isLoading: false,
};

const mutations = {
  updateLoading(state, status) {
    state.isLoading = status;
  },
  updatePhotos(state, photos) {
    state.photoList = photos;
  },
  updatepaging(state, loadMore) {
    if (loadMore) {
      state.page += 1;
    }
    state.loadMore = loadMore;
  }
};

const actions = {
  async searchPhotos({ state, commit }, payload) {
    const params = {
      ...pre_params,
      ...payload,
      method: 'flickr.photos.search',
      extras: 'description,url_s,owner_name,date_upload',
      page: state.page,
      per_page: state.perPage,
    };
    commit('updateLoading', true);

    let newPhotos = [];
    try {
      const { data, status } = await flickrApi.get('', { params });
      const { stat, photos } = data;
      newPhotos = status == 200 && stat != 'ok' ? [] : photos.photo;
    } catch (e) {
      newPhotos = [];
    }
    console.log('newPhotos', newPhotos);
    const allPhotos = state.photoList.concat(newPhotos);
    commit('updatePhotos', allPhotos);
    let hasMore = newPhotos.length == state.perPage ? true : false;

    commit('updatepaging', hasMore);

    commit('updateLoading', false);

  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
