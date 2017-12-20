import Backbone from 'backbone';
import Movie from 'models/movie';

const MovieView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
  },

  render(){
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click button.btn-add': 'add',
  },

  // add(event) {
  //   const movieList = this.model.save();
  // }
  add(event) {
    const movieList = this.model.save({}, {
      success: (model, response) => {
        this.$('.reporting').empty();
        this.$('.reporting').append('Successfully saved movie to library!');
      },
      error: (model, response) => {
        this.$('.reporting').empty();
        this.$('.reporting').append('Failed to save movie to library');

      }
    });
  },
});
 export default MovieView;
