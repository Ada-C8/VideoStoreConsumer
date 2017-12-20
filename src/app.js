import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import MovieList from './collections/movie_list';
import Movie from './models/movie';
import MovieListView from './views/movie_list_view';
import MovieView from './views/movie_view';

let movieTemplate;
// ready to go
const movieList = new MovieList();
// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalHide();
}
const modalDisplay = function modalDisplay(){
  $('.modal').addClass('show');
  $('.modal').removeClass('hidden');
  console.log('changed modal display to block')
};

const modalHide = function modalHide(){
  $('.modal').addClass('hidden');
  $('.modal').removeClass('show');
  console.log('changed modal display to hidden')
};
window.onclick = function(event) {
  if (event.target == modal) {
    modalHide()
  }
};

$(document).ready(function() {
  movieTemplate = _.template($('#movie-template').html());
  $('.view-library').on( "click", function() {
    event.preventDefault();
    movieList.fetch();
  });

  const movieListView = new MovieListView({
    el:'main',
    model: movieList,
    template: movieTemplate,
  });


  movieList.fetch({
    success: function(collection, response){}
  });
});
