import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list'


const MovieView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render)
  },
  render(){
    const compiledTemplate = this.template(this.model.toJSON());

    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.btn-add': 'add'
  },
  add(event){
    console.log('we are adding things to our library database');
    debugger
    let movieData = this.model.attributes;
    // this.model.add(movieData);
    const newMovie = new Movie(movieData);
    if (newMovie.isValid()) {
      MovieList.add(newMovie)
      newMovie.save({
        
      });
    }
  },
});

export default MovieView;
