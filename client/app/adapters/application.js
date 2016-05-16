import DS from 'ember-data';
import ENV from 'api-front/config/environment';


export default DS.RESTAdapter.extend({
  host: ENV.host,
  buildURL: function(type, id, record) {
    return this._super(type, id, record) + '/';
  },
  shouldReloadAll() { return true; }
});
