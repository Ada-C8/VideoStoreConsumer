import $ from 'jquery';
import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
    this.inCatalog = params.inInventory;
    this.inventory = params.inventory;
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click .btn-add': 'addToInventory',
  },

  addToInventory: function(e) {
    e.preventDefault();
    // this.$('button.btn-add').toggleClass('button.btn-add.alreadyAdded')
    this.$('button.btn-add').css({"background": "grey"})
    if (this.model.get("inInventory")) {
      console.log("already exists in inventory");
      console.log(this.$el);
    } else {
      this.model.set('inInventory', 'true')
      this.$('button.btn-add').css({"background": "grey"})
      const databaseInfo = {
        title: this.model.get("title"),
        image_url: this.model.get("image_url").slice(32),
        overview: this.model.get("overview"),
        release_date: this.model.get("release_date"),
        inInventory: true,
      };

      const addMovieFromDatabase = new Movie(databaseInfo);
      if (addMovieFromDatabase.isValid()) {
        this.inventory.add(addMovieFromDatabase);
        addMovieFromDatabase.save({}, {
        success: function(response){
          console.log("yes, added to db probably")
        },
        error: function(response){
          console.log("not added i think")
        },
      });
      }
    }
  },
  // successfulSave(addMovieFromDatabase, response) {
  //   $('.form-errors ul').empty();
  //   $('.form-errors ul').append(`<li>${addMovieFromDatabase.get('title')} was added to your catalog!</li>`);
  // },

});

export default MovieView;
