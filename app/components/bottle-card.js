import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  bottle: null,
  classNames: ['card block trailer-1'],
  store: Ember.inject.service(),

  colorClass: Ember.computed('bottle.status', function(){
    return this.get('bottle.status') ? 'path-blue' : 'path-red'
  }),

  actions: {
    changeState(){
      this.get('store').findRecord('output', this.get('bottle.id')).then(function(output){
        output.set('status', !output.get('status'));
        output.save();
      });
    }
  }
});
