// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

//Styles
import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Models & Collections
import Library from './collections/library';
import LibraryView from './views/library_view';
import ResultList from './collections/result_list';
import ResultListView from './views/result_list_view';


const library = new Library();
const resultList = new ResultList();

// ready to go
$(document).ready(function() {
  library.fetch();

  const libraryView = new LibraryView({
    model: library,
    template: _.template($('#library-template').html()),
    el: '#library',
  });

  libraryView.render();

  const resultListView = new ResultListView({
    model: resultList,
    template: _.template($('#result-list-template').html()),
    el: '#search'
  })

  //resultList.set('query', 'psycho');
  //const resultList = new ResultList({query: 'Psycho'});
  //console.log(resultList);

  //resultList.fetch()

});
