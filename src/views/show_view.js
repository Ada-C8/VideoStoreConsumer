import Backbone from 'backbone';
import Movie from '../models/movie';

const ShowView = Backbone.View.extend({
  initialize(params) {
    this.collection = params.collection;
    this.bus = params.bus;
    this.template = params.template;
    this.model;

    this.listenTo(this.bus, 'addToCollection', this.render);
    // this.listenTo(this.bus, 'defaultView', this.render);

    // console.log(this.collection);
  },

  render(movieData) {
    this.$el.html('');
    const compiledTemplate = this.template(movieData);
    this.$el.html(compiledTemplate);
    this.model = movieData;

    if(movieData['found'] == false) {
      this.$el.append('<button class="button blue white-text float-right add-collection" type="button" name="button" data-id='+movieData.external_id+'>Add to Rental Library</button>');
    }

    this.model = movieData;
    // console.log(this.model);
  },
  events: {
    'click button.add-collection': 'addtoLibrary'
  },
  addtoLibrary() {
    let externalID = this.$('button.add-collection').attr('data-id');

    let url = "http://localhost:3000/movies/add/" + externalID

    console.log("saving: ");
    console.log(this.model);
    let newMovie = new Movie({
      title: this.model.title,
      overview: this.model.overview,
      release_date: this.model.release_date,
      image_url: this.model.image_url,
    });
    console.log(newMovie);
    let saved = newMovie.save();

    if (saved) {
      console.log("SUCCESS");
    }
    // url.save();

  }
});

// Search through movie collection for duplicates
// If not there, send post request to backend

export default ShowView;
