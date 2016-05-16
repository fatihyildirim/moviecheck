import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  movies: [],
  didInsertElement() {
    let self = this;
    this.get('store').findAll('movie').then(function(movies) {
      self.set('movies', []);
      movies.map(item => {
        if (!item.get('status')) {
          self.get('movies').pushObject(item);
        }
      });
    });
  },
});
