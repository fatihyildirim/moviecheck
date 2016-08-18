import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service(),
  actions: {
    login(data) {
      let self = this;
      let authManager = this.get('authManager');

      authManager.authenticate(data.username, data.password).then(
        function() {
          if (authManager.isLoggedIn()) {
            self.transitionTo('movies');
          } else {
            self.transitionTo('login');
          }
        },
        function() {
          alert('Kullanici adi veya sifre yanlis');
        }
      );
    }
  }
});
