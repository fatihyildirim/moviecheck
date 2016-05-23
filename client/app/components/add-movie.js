import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		save(){
			this.sendAction('createMovie',
				this.getProperties('name','year','runtime','director','writer')
			);
		}
	}
});
