import BackBone from 'backbone';
import LibMovieView from './lib_movie_view';
import LibMovie from '../models/lib_movie';

const LibMovieListView = BackBone.View.extend({

  initialize(params) {
    console.log('inside LibMovieListView initialize');
    this.template = params.template;
    this.bus = params.bus;

    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.bus, 'add_movie_to_lib', this.addLibMovie);
  },

  addLibMovie(searchMovie){
    console.log('Message recieved!');
    console.log(searchMovie);
    this.clearStatus();
    const newMovie = new LibMovie(searchMovie.attributes);

    newMovie.save({}, {
      success: (model, response) => {
        console.log('Successfully saved movie');
        console.log(model);
        //report status
        this.statusUpdate(`Successfully added the movie " ${model.attributes.title}" to library.` )
        console.log(model.attributes);
        this.model.add(model.attributes);
      },
      error: (model, response) => {
        console.log('Failed to save movie');

        this.model.remove(model);
        console.log(response.responseJSON['errors']);
        this.statusUpdate(response.responseJSON['errors']['title']);

        //report status
      }
    })
  },

  statusUpdate(message) {
    // clear messages
    console.log('inside statusUpdate');

    const formattedMessage = `<p>${message}</p>`;
    this.$('#messages').append(formattedMessage);
  },

  clearStatus(){
    this.$('#messages').html('');
  },

  render() {
    console.log('inside lib_movie_list_view render function');

    // clearing dom
    this.$('#library-movies').empty();

    // loop through all libMovies in our collection and send them to the libMovieView

    this.model.each((libMovie) => {
      const libMovieView = new LibMovieView({
        model: libMovie,
        template: this.template,
        tagName: 'p',
        className: 'lib-movie',
        bus: this.bus,
      });
      this.$('#library-movies').append(libMovieView.render().$el);
    });
    return this;
  },

});

export default LibMovieListView;
