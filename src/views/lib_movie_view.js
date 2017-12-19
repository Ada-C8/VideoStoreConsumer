import BackBone from 'backbone';
import LibMovie from '../models/lib_movie';

const LibMovieView = BackBone.View.extend({

initialize(params) {
  console.log('inside LibMovieView initalize');
  
  this.template = params.template;
},

render() {
  const compiledTemplate = this.template(this.model.toJSON());

  this.$el.html(compiledTemplate);

  return this;
},

});

export default LibMovieView;
