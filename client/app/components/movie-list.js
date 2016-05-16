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
  actions: {
    editMovie(name, year, runtime, director, id) {
      this.set('name', name);
      this.set('year', year);
      this.set('runtime', runtime);
      this.set('director', director);
      this.set('id', id);
      this.set('formOpen', true);
    },
    cancelForm() {
      this.set('formOpen', false);
    },
    saveForm(movie) {
      let self = this;
      this.set('formOpen', false);

      this.get('store').findRecord('movie', movie.get('id')).then(function(newMovie) {
				newMovie.set('name', self.get('name'));
				newMovie.set('year', self.get('year'));
				newMovie.set('runtime', self.get('runtime'));
				newMovie.set('director', self.get('director'));
				newMovie.save();
			});
    },
    deleteMovie(id) {
      let self = this;
      this.set('id', id);
      this.get('store').findRecord('movie', self.get('id')).then(function(movie) {
        self.get('movies').removeObject(movie);
				movie.destroyRecord();
			});
    },
    movieCheck(value){
      let self = this;
      let status = value.target.checked;
      let checkId = value.target.id;

      self.get('store').findRecord('movie', checkId).then(function(movie) {
				movie.set('status', status);
				movie.save().then(function() {
          self.get('movies').removeObject(movie);
        });
			});
    }
  }
});
