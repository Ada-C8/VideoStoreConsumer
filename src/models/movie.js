import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  url: function() {
    return 'http://localhost:3000/movies/' + this.get('title');
  },
  defaults: {
    inventory: 0,
    release_date: new Date(),
    overview: "No description",
  },
  validate(attr) {
    const errors = {};
    if (!attr.title) {
      if (errors['title']) {
        errors['title'].push("can't be blank");
      } else {
        errors['title'] = ["can't be blank"];
      }
    }
    if (Object.keys(errors).length > 0) {
      return errors;
    } else {
      return false;
    }
  },
});

export default Movie;
