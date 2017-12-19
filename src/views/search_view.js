import Backbone from 'backbone';
import $ from 'jquery';

const SearchView = Backbone.View.extend({
  initialize(params){
    this.template = params.template
  },
  render(){
    this.doWeHaveMovie(this.model.title)
    const compiledTemplate = this.template(this.model); //.toJSON());
    this.$el.html(compiledTemplate)
    return this
  }, // render
  doWeHaveMovie(movieTitle) {
    $.get('http://localhost:3000/movies').done((data) => {
      const allMovies = data;
      console.log('in doWeHaveMovie');
      console.log(allMovies);
    })
    console.log(`the movie title is ${movieTitle}`);


  }
});

export default SearchView
