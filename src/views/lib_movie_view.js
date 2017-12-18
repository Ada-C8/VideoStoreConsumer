import BackBone from 'backbone';
import LibMovie from '../models/lib_movie';

const LibMovieView = BackBone.View.extend({

initialize(params) {
  console.log('inside LibMovieView initalize');
  this.template = params.template;


},

render() {

  return this;
},

});

export default LibMovieView;
