import Backbone from 'backbone';
import Rental from '../models/rental';

const RentalList = Backbone.Collection.extend({
  model: Rental,
});

export default RentalList;
