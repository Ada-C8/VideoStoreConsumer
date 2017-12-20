import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
    this.inventory = params.inventory;
  },
  render() {
    console.log(this.template);
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click .btn-add': 'addToInventory',
  },
  addToInventory: function(e) {
    e.preventDefault();
    if (this.model.get("inInventory")) {
      console.log("already exists in inventory");
    } else {
      const databaseInfo = {
        title: this.model.get("title"),
        image_url: this.model.get("image_url").slice(32),
        overview: this.model.get("overview"),
        release_date: this.model.get("release_date"),
      };

      const addMovieFromDatabase = new Movie(databaseInfo);
      if (addMovieFromDatabase.isValid()) {
        this.inventory.add(addMovieFromDatabase);
        console.log(this.inventory);
      }
    }

  },
});

export default MovieView;
