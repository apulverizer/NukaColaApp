import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  classNames: ['list-filter'],
  store: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.get('store').findAll('led').then((results) => {
      this.set('results', results);
    });
  },

});
