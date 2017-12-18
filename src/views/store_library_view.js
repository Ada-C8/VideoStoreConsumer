import Backbone from 'backbone';
import StoreMovieView from '../views/store_movie_view';
import StoreMovie from 'models/store_movie';


const StoreLibraryView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.model.each((storeMovie) => {
      const storeMovieView = new StoreMovieView({
        model: storeMovie,
        template: this.template,
        className: 'storeMovie',
      });
     this.$('#store-library').append(storeMovieView.render().$el);
    });
    return this;
  },

});

export default StoreLibraryView;
