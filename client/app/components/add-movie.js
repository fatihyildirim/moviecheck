import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	actions:{
		save(){
			let self = this;
			self.get('store').createRecord('movie', {
				name: self.get('name'),
				year: self.get('year'),
				runtime: self.get('runtime'),
				director: self.get('director'),
				writer: self.get('writer')
			}).save().then(function(){
				self.get('router').transitionTo('movies');
			}.bind(self));
		}
	}
});
