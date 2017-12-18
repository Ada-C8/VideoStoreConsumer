import BackBone from 'backbone';
import LibMovieView from './lib_movie_view';
import LibMovie from '../models/lib_movie';

const LibMovieListView = BackBone.View.extend({

  initialize(params) {
    console.log('inside LibMovieListView initialize');
    this.template = params.template;

    this.listenTo(this.model, 'update', this.render);
  },

  render() {
    console.log('inside lib_movie_list_view render function');
    return this;
  },

});

export default LibMovieListView;
