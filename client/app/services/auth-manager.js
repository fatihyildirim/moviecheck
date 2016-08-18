import Ember from 'ember';
import ENV from 'client/config/environment';

export default Ember.Service.extend({
  accessToken: function() {
    return Cookies.get('accessToken');
  }.property('accessToken'),

  authenticate(username, password) {
    let self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        method: "POST",
        url: ENV.host + "/api-token-auth/",
        data: { username: username, password: password }
      }).then((result) => {
        self.set('accessToken', result.token);
        Cookies.set('accessToken', self.get('accessToken'), { expires: 7 });
        resolve(Cookies.get('accessToken'));
      }, (err) => {
        reject(err);
      });
    });
  },

  invalidate() {
    Cookies.remove('accessToken');
    this.set('accessToken', Cookies.get('accessToken'));
  },

  isLoggedIn() {
    if (this.get('accessToken') === undefined) {
      return false;
    }

    return true;
  }
});
