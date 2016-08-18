import DS from 'ember-data';
import Ember from 'ember';
import ENV from 'client/config/environment';


export default DS.RESTAdapter.extend({
  host: ENV.host,
  authManager: Ember.inject.service(),
  headers: Ember.computed('authManager.accessToken', function() {
    return {
      "Authorization": `Token ${this.get('authManager').get('accessToken')}`
    };
  }),
  buildURL: function(type, id, record) {
    return this._super(type, id, record) + '/';
  },
  shouldReloadAll() { return true; }
});
