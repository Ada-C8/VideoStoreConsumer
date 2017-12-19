import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  initialize(params) {
    this.title = params.title;
    this.image_url = params.image_url;
    this.release_date = params.release_date;
    this.overview = params.overview;
    this.bus = params.bus;
    this.listenTo(this.bus, 'addInventory', this.addInventory);
  },
  addInventory(quantity) {
    console.log('in addInventory');
    console.log(quantity);
  },
});

export default Movie;
