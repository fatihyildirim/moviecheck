import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  movie: DS.hasMany('movie'),
  status: DS.attr()
});
