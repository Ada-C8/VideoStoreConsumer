// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import VideoList from 'collections/video_list';
import VideoListView from 'views/video_list_view';

// Import Stylesheets
import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';


const rentalList = new VideoList();

const videoTemplate = _.template($('#video-template').html());
const videoListTemplate = _.template($('video-list-template').html());

// ready to go
$(document).ready(function() {
  const rentalView = new VideoListView({
    model: rentalList,
    template: videoListTemplate,
    el: '#rental-library',
  });

  rentalView.render();

});
