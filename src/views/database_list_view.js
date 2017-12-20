import Backbone from 'backbone';
import _ from 'underscore';
import MovieView from '../views/movie_view'

const DatabaseListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
    this.inventory = params.availableInventory;

  },

  render() {
    this.$('#database-movies').empty();
    this.model.forEach((movie) => {
      let inventoried = false;
      this.inventory.forEach((availableMovie) => {
        if (availableMovie.get('overview') === movie.get('overview')) {
          inventoried = true;
        }
      })

      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'tr',
        className: 'movie',
      });

      this.$('#database-movies').append(movieView.render().$el);
      return this;
    });
  },

  events: {
    'click button.add': 'addToInventory',
  },
  addToInventory: function(e) {
    e.preventDefault();
    const orderData = {
    title: this.$(title).val(),
    image: image_url,
    overview: overview,
    inInventory: inventoried,
    matchedQuote: this.quoteList.findWhere({ symbol: this.$('select[name=symbol]').val() }),
    console.log("this . MODEL:")
    console.log(this.model);

    console.log("this")
    console.log(this.$(`input[name='query']`).val())


    this.model.set('query', this.$(`input[name='query']`).val());
    this.render()
  },


});

export default DatabaseListView;
