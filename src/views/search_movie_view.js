import BackBone from 'backbone';
import SearchMovie from '../models/search_movie';

const SearchMovieView = BackBone.View.extend({

  initialize(params) {
    this.template = params.template
  },

  render() {
    const compiledTemplate = this.template(this.model.toJSON());

    this.$el.html(compiledTemplate);

    return this
  },
});

export deault SearchMovieView;
