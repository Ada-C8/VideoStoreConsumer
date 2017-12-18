import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// Models & Collections
import ResultList from './collections/result_list';
import ResultListView from './views/result_list_view';


const resultList = new ResultList();

// ready to go
$(document).ready(function() {
  resultList.fetch().done(() => {

  });

  $('#main-content').append('<p>Hello World!</p>');

  const resultListView = new ResultListView({
    model: resultList,
    template: _.template($('#result-template').html()),
    el: '#results-container',
  });
  resultListView.render();

});
