import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('movies');
  this.route('movies.detail', {path:'movies/:id'});
});

export default Router;
