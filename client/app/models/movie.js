import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  year: DS.attr(),
  runtime: DS.attr(),
  director: DS.belongsTo('director'),
  writer: DS.belongsTo('writer'),
  status: DS.attr()
});
