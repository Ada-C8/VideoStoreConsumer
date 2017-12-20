import Backbone from 'backbone';
import $ from 'jquery';

const SearchView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    this.bus = params.bus;

    this.listenTo(this.bus,`${this.model.title}${this.model.release_date}`, this.setHave )
  },
  render(){
    console.log('in render for search view');
    const movieData = {
      title: this.model.title,
      release_date: this.model.release_date}
    this.doWeHaveMovie(movieData)
    const compiledTemplate = this.template(this.model); //.toJSON());
    this.$el.html(compiledTemplate)
    return this
  }, // render
  doWeHaveMovie(movieData) {
    console.log('in doWeHaveMovie');
    console.log(movieData);
    this.bus.trigger('lookForMovie', movieData)
  }, // doWeHaveMovie
  setHave(haveIt) {
    console.log('in have it');
    if (haveIt) {
      console.log('in if');
      console.log(this.model);
      this.model['have'] = true;
    } else {
      this.model['have'] = false;
    } // if
  } // setHave

});

export default SearchView
