import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$('body').attr('class', '');
    Ember.$('body').addClass('ember-application login');
  },

  willDestroyElement() {
    Ember.$('body').attr('class', '');
    Ember.$('body').addClass(
      'ember-application page-header-fixed page-container-bg-solid page-boxed'
    );
  },

  actions: {
    login() {
      this.sendAction(
        'login',
        this.getProperties('username', 'password')
      );
    }
  }
});
