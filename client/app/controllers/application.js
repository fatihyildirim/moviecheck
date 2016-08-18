import Ember from 'ember';

export default Ember.Controller.extend({
  authManager: Ember.inject.service(),

  isLoggedIn: function() {
    return this.get('authManager').isLoggedIn();
  }.property('isLoggedIn'),

  isAccessTokenChanged: Ember.observer('authManager.accessToken', function() {
    this.set('isLoggedIn', this.get('authManager').isLoggedIn());
  })
});
