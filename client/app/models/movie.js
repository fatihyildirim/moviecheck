import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  year: DS.attr(),
  runtime: DS.attr(),
  director: DS.attr(),
  status: DS.attr()
});
