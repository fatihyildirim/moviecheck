import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service('auth-manager'),

  actions: {
    didTransition() {
      this.get('authManager').invalidate();
      this.transitionTo('login');
    }
  }
});
