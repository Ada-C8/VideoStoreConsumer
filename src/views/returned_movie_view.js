import Backbone from 'backbone';
import ReturnedMovie from '../models/returned_movie';

const ReturnedMovieView = Backbone.View.extend({
  model: ReturnedMovie,

  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
  },

  render() {
    console.log(this.model);
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  addMovie(event){
    event.preventDefault;
    let data = this.model.attributes;
    data['bus'] = this.bus;
    const newRecord = new Movie(data);
    console.log(this.bus);
    this.bus.trigger('addMovie', newRecord.attributes);
  },
});

export default ReturnedMovieView;
