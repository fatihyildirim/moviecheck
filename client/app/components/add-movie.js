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
		Ember.$(".director-select").select2({
		  maximumSelectionLength: 1,
		});
		Ember.$(".writer-select").select2({
			maximumSelectionLength: 1,
		});

		Ember.$('.director-select').change(function() {
			self.set('director', $(this).val());
		});

		Ember.$('.writer-select').change(function() {
			self.set('writer', $(this).val());
		});

		// let data = $('.director-select').select2('data');
	},
	actions:{
		save(){
			let self = this;
			let director = self.get('store').peekRecord('director', self.get('director'));
			let writer = self.get('store').peekRecord('writer', self.get('writer'));
			console.log(director);
			console.log(writer);

			self.get('store').createRecord('movie', {
				name: self.get('name'),
				year: self.get('year'),
				runtime: self.get('runtime'),
				director: director,
				writer: writer
			}).save().then(function(){
				self.get('router').transitionTo('movies');
			}.bind(self));
		}
	}
});
