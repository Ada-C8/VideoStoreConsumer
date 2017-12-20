// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import VideoList from 'collections/video_list';
import VideoListView from 'views/video_list_view';
import DetailView from 'views/detail_view';
import CustomerList from 'collections/customer_list';


// Import Stylesheets
import 'css/_settings.css';
import 'css/foundation.css';
import './css/styles.css';


const rentalList = new VideoList();

const customerList = new CustomerList();
customerList.fetch();


const videoTemplate = _.template($('#video-template').html());
const videoListTemplate = _.template($('#video-list-template').html());

let bus = {};
bus = _.extend(bus, Backbone.Events);

// ready to go
$(document).ready(function() {
  rentalList.fetch().done(() => {
    const rentalView = new VideoListView({
      model: rentalList,
      bus: bus,
      template: videoListTemplate,
      // detailTemplate: videoTemplate,
      el: '#rental-library',
    });
    rentalView.render();

    const detailView = new DetailView({
      collection: rentalList,
      customerList: customerList,
      bus: bus,
      template: videoTemplate,
      el: '#video-main'
    });
    detailView.render('Jaws', {flag: 'top'});

  }).fail(()=> {
    $('#rental-library').html('<p>Please refresh page</p>')
  });

  $('#checkout-form').hide();

});
