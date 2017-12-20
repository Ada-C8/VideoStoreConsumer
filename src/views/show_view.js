import Backbone from 'backbone';
import Movie from '../models/movie';

const ShowView = Backbone.View.extend({
  initialize(params) {
    this.collection = params.collection;
    this.bus = params.bus;
    this.template = params.template;
    this.model;
    this.listenTo(this.bus, 'addToCollection', this.render);

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
  },
  events: {
    'click button.add-collection': 'addtoLibrary'
  },
  addtoLibrary() {
    let collection_state = this.collection
    this.model
  }
});

// Search through movie collection for duplicates
// If not there, send post request to backend

export default ShowView;
