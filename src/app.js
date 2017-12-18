import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// Our Components - Project Models, Collections, Views
import LibMovie from './models/lib_movie';
import LibMovieList from './collections/lib_movie_list';
import LibMovieView from './views/lib_movie_view';
import LibMovieListView from './views/lib_movie_list_view';
import SearchMovie from './models/search_movie';
import SearchMovieList from './collections/search_movie_list';

// template varibles

let libraryMovieTemplate;

// ready to go
$(document).ready(function() {
  //  underscore templates
  libraryMovieTemplate = _.template($('#library-movie-template').html());
  // $('#main-content').append('<p>Hello World!</p>');
  // libMovieList.fetch();

  // new instance of LibMovieList
  const libMovieList = new LibMovieList();
  libMovieList.fetch()
  // new instance of LibMovieListView
  const libMovieListView = new LibMovieListView({
    el: '#library-movies-container',
    model: libMovieList,
    template: libraryMovieTemplate,
  });


  libMovieListView.render();

  console.log(libMovieList);
});
