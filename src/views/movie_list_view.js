import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.collection = params.collection;

    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.collection, 'update', this.render);

    this.mode = "inventory";
    // console.log("THIS IS THE MODEL");
    // console.log(this.model);
    // console.log("THIS IS THE COLLECTION");
    // console.log(this.collection);
  },
  inventoryMode() {
    this.mode = "inventory";
  },
  searchMode() {
    this.mode = "search";
  },
  render() {
    this.$('ul').empty();

    // this.collection.fetch({context:collection}).done(function() {
    //   let realLength = this.size();
    //   console.log(realLength);
    // });

    // console.log("THIS IS THIS: ");
    // console.log(this);
    // let search_shit = this;
    // this.collection.fetch().done(function(){
    //   search_shit.method();
    // })

    console.log(this.mode);

    // console.log("COLLECTION LENGTH: ");
    // console.log(this.collection.size());

    if (this.mode == "search") {
      // let moviesRender = this.collection;
      console.log("IF ELSE  - COLLECTION");
      console.log(this.collection);
      this.collection.forEach((movie) => {
        // console.log(movie);
        const movieView = new MovieView({
          bus: this.bus,
          model: movie,
          template: this.template,
          tagName: 'li',
          className: 'movie',
          collection: this.model,
        });
        this.$('ul').append(movieView.render().$el);
      });
    } else if (this.mode == "inventory"){
      // let moviesRender = this.model;
      this.model.forEach((movie) => {
        // console.log(movie);
        console.log("IF ELSE  - MODEL");
        const movieView = new MovieView({
          bus: this.bus,
          model: movie,
          template: this.template,
          tagName: 'li',
          className: 'movie',
          collection: this.model,
        });
        this.$('ul').append(movieView.render().$el);
      });
    } else {
      console.error(`Invalid movie list mode ${this.mode}`);
    }

    // this.collection.forEach((movie) => {
    //   // console.log(movie);
    //   const movieView = new MovieView({
    //     bus: this.bus,
    //     model: movie,
    //     template: this.template,
    //     tagName: 'li',
    //     className: 'movie',
    //     collection: this.model,
    //   });
    //   this.$('ul').append(movieView.render().$el);
    // });

    return this;
  },

  method() {
    console.log(this.model.length);
  }
});

export default MovieListView;
