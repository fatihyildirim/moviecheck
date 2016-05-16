import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		createMovie(data){
			console.log(data);
			this.store.createRecord('movie', {
				name: data.name,
				year: data.year,
				runtime: data.runtime,
				director: data.director
			}).save().then(function(){
				this.transitionTo('movies');
			}.bind(this));
		}
	}
});
