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
    'click button.btn-add': 'add',
    'click button.btn-show': 'showSingle'
  },
  showSingle(){
    event.preventDefault();
    let tempId = this.model.attributes.id;
    this.model.set('id', this.model.attributes.title);
    let tempThis = this;
    this.model.fetch({
      success: function(option, response){
        console.log(response);
        let newMovie = new Movie(response);
        tempThis.trigger('show_movie', newMovie);
        console.log('triggering movie reset');
        console.log('response');
      },
    });
    this.model.set('id', tempId);

  },
  add(event){
    event.preventDefault();

    let newMovieObject = this.model.attributes;

    console.log(newMovieObject);
    let newMovie = new Movie(newMovieObject);
    console.log(newMovie);
    // debugger
    this.model.add(newMovie);
    this.trigger('show_modal');
  },
  show(event) {

  },
});

export default MovieView;
