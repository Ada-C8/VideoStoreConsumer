import Backbone from 'backbone';
import MovieView from './movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    //  this.model = params.model;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    console.log("inside render in movie list view");
    console.log( this.model);
    this.model.each((movie) => {
      console.log("inside the loop");
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'tr',
      });
      this.$('#movies-list').append(movieView.render().$el);
    });


    return this
  }

});

export default MovieListView;
