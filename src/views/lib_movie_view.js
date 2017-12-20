import BackBone from 'backbone';
import LibMovie from '../models/lib_movie';
import $ from 'jquery';

const LibMovieView = BackBone.View.extend({

initialize(params) {
  console.log('inside LibMovieView initalize');
  this.bus = params.bus
  this.template = params.template;
},

events: {
  'click button.btn-add-checkout': 'sendMovieTitle',
},

sendMovieTitle(event){
  console.log(`btn-add-checkout has been clicked, inside sendMovieTitle method`);

  const title = event.currentTarget.value;

  this.bus.trigger('pass_movie_name', title);
},

render() {
  const compiledTemplate = this.template(this.model.toJSON());

  this.$el.html(compiledTemplate);

  return this;
},

});

export default LibMovieView;
