import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CountAppENV.locationType
});

Router.map(function() {
  this.route('tabbbar');
});

export default Router;
