import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.external = params.external;
    // this.bus = params.bus;
    // this.listenTo(this.model, 'change', this.render); //superfluous?
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());

    this.$el.html(compiledTemplate);

    if (this.external) {
      this.$el.append('<button class="button add-movie">Add Me</button>')
    }

    return this
  },

  events: {
    'click button.add-movie': 'addMovie',
  },

  addMovie(event) {
    // console.log(this);
    this.model.save({}, {
      success: (model, response) => {
        console.log('success');
        console.log(model);
        console.log(response);
      },
      error: (model, response) => {
        console.log('error');
        console.log(model);
        console.log(response);
      }
    });
  },
});


export default MovieView;
