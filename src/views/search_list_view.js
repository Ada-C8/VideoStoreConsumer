import Backbone from 'backbone';
import SearchView from '../views/search_view'
import SearchList from '../collections/search_list'


import Search from '../models/search';

const SearchListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
    this.bus = params.bus
  },
  render() {
    this.$('#search-list').empty();
    this.model.sort();
    this.model.each((search) => {
      console.log('in Search List View render');
      const searchView = new SearchView({
        model: search,
        template: this.template,
        tagName: 'tr',
        className: 'search',
        bus: this.bus,
      });
      this.$('#search-list').append(searchView.render().$el);
    });
    return this;
  },

  events: {
    'click button.btn-search-api': 'searchApi',
  },

  getFormData() {
    console.log("I am reading the form")
    const formData = {};
    const title = this.$('.movie-entry-form input[name=title]').val();
    this.$('.movie-entry-form input[name=title]').val('')
    // formData['title'] = title;
    return title;
  },


  searchApi() {
    //this is an ugly way to reset the URL.  See if we can fix it
    this.$('#search-error-message').html('');
    event.preventDefault();
    const title = this.getFormData()
    if (title === ""){
      console.log('Error: No title')
      this.$('#search-error-message').append('Error: No search terms')
      return
    } else {
      this.model.url += title;
      // console.log(this.model.url);
      let that = this
      this.model.fetch().done(function () {
        that.reportNoResults(title);
      });


      //reset URL
      this.model.url = 'http://localhost:3000/movies?query=';
      // console.log(this.model.length)

      //what if no models are returned?  report error here?
    }
  },

  reportNoResults(title){
    if(this.model.length == 0) {
      // this.$('#search-error-message').empty()
      this.$('#movie-success-messages').html('');

      console.log(`No movies match search term: ${title}`)
      this.$('#search-error-message').append(`No movies match search term: ${title}`)
    }
  },
  // clearMessages(){
  //   this.$('#movie-success-messages').html('');
  // },

});

export default SearchListView;
