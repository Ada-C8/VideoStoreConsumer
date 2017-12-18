import BackBone from 'backbone';
import LibMovieView from './lib_movie_view';
import LibMovie from '../models/lib_movie';

const LibMovieListView = BackBone.View.extend({

  initialize(params) {
    console.log('inside LibMovieListView initalize');
    this.template = params.tempate;
    this.model.fetch();
  },

  render() {

    return this;
  },

});

export default LibMovieListView;
