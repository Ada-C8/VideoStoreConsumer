import Backbone from 'backbone';
import Search from '../models/search';

const SearchList = Backbone.Collection.extend({
  model: Search,
  url: `http://localhost:3000/movies?query=`,
  parse: function(response) {
    // console.log(response);
    // console.log(response["poster_path"]);
    // let movie = {
    //   title: response["title"],
    //   overview: response["overview"],
    //   release_date: response["release_date"],
    //   image_url: response["poster_path"],
    //   external_id: response["id"],
    // }
    // console.log(movie);
    // console.log(movie.image_url);
    // return movie;
    return response;
  },
});

export default SearchList;
